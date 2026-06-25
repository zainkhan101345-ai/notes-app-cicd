pipeline{
    agent any
    environment{
        EMAIL='zainkhan1980101@hotmail.com'
    }
    stages{
         stage('Clone repo'){
            steps{
                git branch: 'main' , url : 'https://github.com/zainkhan101345-ai/notes-app-cicd.git'
            }
        }
          stage('Build docker images and run containers'){
            steps{
                 sh '''
                docker compose down || true
                docker rm -f mongodb notes-client notes-server || true
                docker compose up --build -d
                '''
            }
        }
        stage('Send Email notifcation'){
            steps{
                emailext(
                     subject:"Notes  App Deployed Successfully on EC2 using Jenkins!!",
                    body:"Your Note App is deployed! http://13.48.56.138:3000/",
                    to: "${EMAIL}"
                )
            }
        }
    }
}