import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it,  } from 'vitest'
import Questions from '../components/Questions.jsx'

describe('Questions', () => {

    const questions = "What is Frontend Mentor, and how will it help me?"
    const answers = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript, it's suitable for all levels and ideal for portfolio building."

    it('should check if only question is displayed before button click', () => {
        render(<Questions question={questions} answer={answers} />)

        expect(screen.getByText(questions)).to.exist;
        expect(screen.queryByText(answers)).not.to.exist;
    })
    it('should display answers when button is clicked', () => {
        render(<Questions question={questions} answer={answers} />)

        expect(screen.getByText(questions)).to.exist;
        expect(screen.queryByText(answers)).not.to.exist;

        const button = screen.getByLabelText('toggle-answer')

        fireEvent.click(button)
        expect(screen.queryByText(answers)).to.exist;

        fireEvent.click(button)
        expect(screen.queryByText(answers)).not.to.exist;
    })
})