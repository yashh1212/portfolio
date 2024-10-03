import React from 'react'
import '../css/Experience_card.css'
function Experience_card({experience}) {
     return (
        <div className='experience_card'>
            <div className='left_section'>
                <span>{experience.start}<span className='line_between'></span>{experience.end}</span>
            </div>
            <div className='right_section'>
                <span>{experience.company_name}<span> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                    ></path>
                </svg></span></span>
                <p>{experience.des}</p>
                {experience.technologies ? <ul>{experience.technologies.map((technology,index) => (
                <li key={index}>{technology}</li>
            ))}</ul> : null}
            </div>
         </div>
    )
}

export default Experience_card
