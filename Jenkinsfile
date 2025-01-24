pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "portfolio"
        DOCKER_CONTAINER = "portfolio-container"
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Checkout the 'main' branch explicitly
                git branch: 'main', url: 'https://github.com/Kadhir812/Portfolio.git'
            }
        }

        stage('Set Workspace Permissions') {
            steps {
                script {
                    // Set the workspace permissions to allow read/write access for Jenkins
                    sh 'chmod -R 775 .'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile in the repository
                    sh "docker build -t $DOCKER_IMAGE ."
                }
            }
        }

        stage('Run Development Container') {
            steps {
                script {
                    // Stop and remove any existing containers with the same name
                    sh """
                    docker stop $DOCKER_CONTAINER || true
                    docker rm $DOCKER_CONTAINER || true
                    """
                    // Run the Docker container from the built image
                    sh """
                    docker run -it -d -p 5173:5173 --name $DOCKER_CONTAINER -e PATH=\$PATH:/app/node_modules/.bin $DOCKER_IMAGE
                    """
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}
