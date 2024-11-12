pipeline {
    agent any
    stages {
        stage('Build Trivia') {
            steps {
                dir('trivia_game') {
                    echo 'Building trivia :)'
                    bat 'python -m pydoc -w trivia_game'
                    bat 'dir'
                }
            }
        }
        stage('Build USQL') {
            steps {
                dir('USQL') {
                    echo 'Building USQL :)'
                    bat 'python -m pydoc -w USQL'
                    bat 'dir'
                }
            }
        }
        stage('Archivar') {
            steps {
                archiveArtifacts allowEmptyArchive: true, artifacts: 'trivia_game/trivia_game.html'
                archiveArtifacts allowEmptyArchive: true, artifacts: 'USQL/USQL.html'
            }
        }
    }
}
