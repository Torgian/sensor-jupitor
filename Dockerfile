FROM python:3.10-slim

EXPOSE 8000

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1
ENV DOCKERIZE_VERSION v0.6.1
# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

ENV WORK_DIR /usr/src/sa

WORKDIR ${WORK_DIR}

COPY requirements.txt ${WORK_DIR}

RUN apt update \
 && apt install -y \
    binutils \
    gcc \
    libpq-dev \
    libproj-dev \
    gdal-bin \
    wget \
 && pip install -r requirements.txt \
 && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
 && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
 && apt purge -y wget \
 && apt autoremove -y \
 && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
 && rm -rf /var/lib/apt/lists/*

COPY ./saFE ${WORK_DIR}

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
