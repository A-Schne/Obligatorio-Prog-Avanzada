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
                    bat 'C:/Users/Agust/AppData/Local/Programs/Python/Python313/python.exe -m pip install -r requirements.txt'
                    echo 'Building USQL :)'
                    bat 'C:\\Users\\Agust\\AppData\\Local\\Programs\\Python\\Python313\\python.exe -m pydoc -w ESP_ENG'
                    bat 'dir'
                }
            }
        }
        stage('Build concurrencia') {
            steps {
                dir('concurrencia') {
                    echo 'Building Concurrencia :)'
                    bat '"C:\\Program Files\\Java\\jdk-21\\bin\\javadoc.exe" -d docs *.java'
                    bat 'dir'
                }
            }
        }

        stage('Archivar') {
            steps {
                archiveArtifacts allowEmptyArchive: true, artifacts: 'trivia_game/trivia_game.html'
                archiveArtifacts allowEmptyArchive: true, artifacts: 'USQL/ESP_ENG.html'
                archiveArtifacts allowEmptyArchive: true, artifacts: 'concurrencia/docs/**/*.html'
            }
        }
    }
}
