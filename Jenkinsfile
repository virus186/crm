pipeline {
    agent any
     environment {
            CI = 'true'
        }
    stages {
        stage('Install') {
            steps {
                bat 'npm i --force'
            }
        }
        stage('Dev') {
            steps {
                bat 'npm run dev'
            }
        }       
    }
}
