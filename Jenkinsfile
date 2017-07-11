pipeline {
    agent any

    stages {
        stage ('NPM Build') {
            steps {
                sh 'npm install'
            }
        }

        stage ('Docker Build') {
            steps {
                sh 'docker build -t ehayanis/stack-tech-ui .'
            }
        }
    }
}
