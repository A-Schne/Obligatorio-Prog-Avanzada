pipeline {
    agent any
    stages {
        stage('Build Trivia') {
            steps {
                dir('trivia_game') {
                    bat 'C:/Users/Agust/AppData/Local/Programs/Python/Python313/python.exe -m pip install -r requirements.txt'
                    echo 'Building trivia :)'
                    bat 'C:\\Users\\Agust\\AppData\\Local\\Programs\\Python\\Python313\\python.exe -m pydoc -w trivia_game'
                    bat 'dir'
                }
            }
        }
        stage('Build USQL') {
            steps {
                dir('USQL') {
                    echo 'Building USQL :)'
                    bat 'C:\\Users\\Agust\\AppData\\Local\\Programs\\Python\\Python313\\python.exe -m pydoc -w trivia_game'
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
