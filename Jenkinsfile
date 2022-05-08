pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                npm run build
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                npm run test
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            when {
              expression {
                currentBuild.result == null || currentBuild.result == 'SUCCESS' 
              }
            }
            steps {
                npm start
                echo 'Publish'
            }
        }
    }
}
