import React from 'react';
import questions from './questions.js';
import Questions from './Questions.jsx';
import star from '../assets/images/icon-star.svg'

const Container = () => {

    // function createQuestion(question, index){
    //     return (
    //         <Questions 
    //             key={index}
    //             questions={question.questions}
    //             answers={question.answers}
    //         />
    //     )
    // }

  return (  
    <div className='faq-container'>
        <div className='container-head'>
            <h1><img src={star} alt='star image'/>FAQs</h1>
        </div>
        <div className='container-body'>
        {questions.map((question) => 
                {
                    return (
                        <Questions 
                            
                            questions={question.questions}
                            answers={question.answers}
                        />
                    )
                }
            )}
        </div>
    </div>
  )
}

export default Container