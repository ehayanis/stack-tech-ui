pipeline {
    agent any

    tools {
        node 'Node 6.11.0'
    }
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
