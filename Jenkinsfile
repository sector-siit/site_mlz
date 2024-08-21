pipeline {
    agent any

    environment {
        GIT_URL = 'https://github.com/sector-siit/site-mlz.git'
        GIT_BRANCH = 'develop'
        DOCKER_REGISTRY = 'intrasiit.lomasdezamora.gov.ar:5000'
        IMAGE_NAME = 'sitemlz'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', 
                          branches: [[name: "${GIT_BRANCH}"]], 
                          doGenerateSubmoduleConfigurations: false, 
                          extensions: [], 
                          userRemoteConfigs: [[credentialsId: '6164b0e9-08ec-4b8e-afa3-43bec1aa42c4', url: "${GIT_URL}"]]
                ])
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Generar versión basada en la fecha y el número de build
                    def version = "${env.BUILD_ID}-${new Date().format('yyyyMMddHHmmss')}"
                    env.IMAGE_TAG = "${version}"
                }
                // Pasar las variables de entorno al comando docker-compose
                sh """
                    export IMAGE_TAG=${env.IMAGE_TAG}
                    export DOCKER_REGISTRY=${env.DOCKER_REGISTRY}
                    export IMAGE_NAME=${env.IMAGE_NAME}
                    docker build -t ${IMAGE_NAME} .
                """
            }
        }

        stage('Tag and Push Image') {
            steps {
                script {
                    // Etiquetar la imagen con la versión generada y con latest
                    sh """
                        docker tag ${IMAGE_NAME} ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
                        docker tag ${IMAGE_NAME} ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
                    """
                }
                sh """
                    docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
                    docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
                """
            }
        }

        stage('Stop Docker Container') {
            agent { label 'intrasiit' }
            steps {
                script {
                    def containerId = sh(script: "docker ps -q --filter name=${IMAGE_NAME}", returnStdout: true).trim()
                    if (containerId) {
                        sh "docker stop ${containerId}"
                        sh "docker rm ${containerId}"
                    }
                }
            }
        }

        stage('Pull New Image Version') {
            agent { label 'intrasiit' }
            steps {
                // Pull both latest and the version-tagged image
                sh "docker pull ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
                sh "docker pull ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest"
            }
        }

        stage('Run Image in intrasiit') {
            agent { label 'intrasiit' }
            steps {
                // Use the version-tagged image or latest as needed
                sh """
                    docker run -d -p 80:3000 --name ${IMAGE_NAME} ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
        }
    }
    post {
        success {
            script {
                echo "Build successful. Docker image version: ${env.IMAGE_TAG}"
                // Aquí puedes añadir un paso para enviar notificaciones
                // Ejemplo: enviar un mensaje a Slack o correo electrónico
            }
        }
        failure {
            script {
                echo "Build failed. Check the logs for more details."
            }
        }
    }
}
