
import QuizCard from '../component/QuizCard'
import { useState } from 'react';
import ThankYou from '../component/ThankYou'

const programmingQuiz = [
    {
        question: 'What does HTML stand for?',
        options: [
            { title: "Hyper Text Markup Language", value: "a" },
            { title: "Home Tool Markup Language", value: "b" },
            { title: "Hyperlinks and Text Markup Language", value: "c" }
        ],
        correct : 'a',
        checked : 'b',
    },
    {
        question: 'What does CSS stand for?',
        options: [
            { title: "Cascading Style Sheets", value: "a" },
            { title: "Computer Style Sheets", value: "b" },
            { title: "Colorful Style Sheets", value: "c" }
        ],
        correct : 'a',
        checked : 'b',
    },
    {
        question: 'What does JS stand for?',
        options: [
            { title: "JavaScript", value: "a" },
            { title: "JavaSource", value: "b" },
            { title: "JavaSyntax", value: "c" }
        ],
        correct : 'a',
        checked : 'b',
    },
    {
        question: 'What is the output of 2 + 2 in JavaScript?',
        options: [
            { title: "3", value: "a" },
            { title: "4", value: "b" },
            { title: "5", value: "c" }
        ],
        correct : 'b',
        checked : 'c',
    },
    {
        question: 'What is the full form of CSS?',
        options: [
            { title: "Cascading Style Sheets", value: "a" },
            { title: "Computer Style Sheets", value: "b" },
            { title: "Color Style Sheets", value: "c" }
        ],
        correct : 'a',
        checked : 'b',
    },
    {
        question: 'What is the primary function of JavaScript?',
        options: [
            { title: "To style HTML", value: "a" },
            { title: "To provide structure to web pages", value: "b" },
            { title: "To add interactivity to web pages", value: "c" }
        ],
        correct : 'c',
        checked : 'b',
    }
];

function QuizScreen(){
    const [message,UpdateMessage] = useState('')
    const [currentIndex,updateIndex] = useState(0)
    const [percentage,updatePercentage] = useState(0)
    const calculation = () => {
        let newPercentage = 0;
        programmingQuiz.forEach((item,index)=>{
            if(item.correct === item.checked){
                newPercentage++
            }
        })
        updatePercentage(((newPercentage/programmingQuiz.length)*100))
        UpdateMessage('Your Score is '+percentage+'%')
    }
    return <>
        {programmingQuiz.slice(currentIndex,currentIndex+1).map((item, index)=>{
            return <QuizCard 
                    key={currentIndex}
                    question={item.question}
                    options={item.options}
                    updateIndex={() => {
                        updateIndex(currentIndex+1)
                    }}
                    selectedOption={(option:string)=>{
                        programmingQuiz[currentIndex].checked = option
                        calculation()
                    }}
                />
        })}
        {
            (currentIndex == (programmingQuiz.length)) ? <ThankYou message={message}/> : ''
        }
    </>
}
export default QuizScreen;
