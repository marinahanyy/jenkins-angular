pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub ')
    }
    stages {
      //   stage('Checkout') {
      //       steps {
      //           // Checkout your code from version control
      //           git 'https://github.com/marinahanyy/angular-project.git'
      //       }
      //   }
       stage('Build') {
            steps {
                // Build Docker image
                sh 'docker build -t marinaaaaa/angular-image:latest .'
            }
        }
        stage('Install Node.js and Angular CLI') {
            steps {
                // Install Node.js
              //  sh 'curl -sL https://deb.nodesource.com/setup_14.x | -E bash -'
                  sh 'apt-get install -y nodejs'

                // Install Angular CLI
                sh 'npm install -g @angular/cli'
            }
        }
       stage('Install dependencies') {
           steps {
              //  Install project dependencies
               sh 'npm install'
           }
       }
        stage('Run unit tests') {
            steps {
                // Run ng test
                sh 'ng test'
            }
        }
        stage('Format code') {
            steps {
                sh 'npx prettier --write "**/*.{ts,html,css}"'
            }
        }
           stage('Install JMeter') {
            steps {
                // Download and install Apache JMeter
                sh 'wget -O apache-jmeter-5.4.1.tgz https://downloads.apache.org/jmeter/binaries/apache-jmeter-5.4.1.tgz'
                sh 'tar -xvf apache-jmeter-5.4.1.tgz'
            }
        }
        stage('Install OWASP ZAP') {
            steps {
                // Download and install OWASP ZAP
                sh 'wget -O owasp-zap-2.10.0.tar.gz https://github.com/zaproxy/zaproxy/releases/download/v2.10.0/ZAP_2.10.0_Core.tar.gz'
                sh 'tar -xvf owasp-zap-2.10.0.tar.gz'
            }
        }
        stage('Performance Test') {
            steps {
                // Execute performance tests using JMeter
                sh './apache-jmeter-5.4.1/bin/jmeter -n -t performance-test.jmx -l performance-results.jtl'
            }
        }
        stage('Security Test') {
            steps {
                // Execute security tests using OWASP ZAP
                sh './owasp-zap-2.10.0/zap.sh -cmd -quickurl http://localhost:8080/myapp'
            }
        }
        stage('Build') {
            steps {
                // Build Docker image
                sh 'docker build -t marinaaaaa/angular-image:latest .'
            }
        }
        stage('Login') {
            steps {
                // Docker login
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push') {
            steps {
                // Push Docker image to Docker Hub
                sh 'docker push marinaaaaa/angular-image:latest'
            }
        }
        stage('Deploy') {
            steps {
                // Deploy Docker container
                sh 'docker run -d -p 5200:5200 --name app marinaaaaa/angular-image:latest'
            }
        }
        stage('End-to-End Tests') {
            steps {
                // Install Cypress and run e2e tests
                sh 'npm install cypress'
                sh 'npx cypress run'
            }
        }
    }
    post {
        always {
            // Docker logout
            sh 'docker logout'
        }
    }
}
