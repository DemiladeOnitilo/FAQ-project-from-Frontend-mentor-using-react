import React from 'react';
import questions from './questions.js';
import Questions from './Questions.jsx';
import star from '../assets/images/icon-star.svg'

const Container = () => {

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
                            question={question.question}
                            answer={question.answer}
                        />
                    )
                }
            )}
        </div>
    </div>
  )
}

export default Container