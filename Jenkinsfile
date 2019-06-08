pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				sh 'rm -f private.gradle'
				sh './gradlew clean build'
				archive 'build/libs/*jar'
			}
		}
	}
}
