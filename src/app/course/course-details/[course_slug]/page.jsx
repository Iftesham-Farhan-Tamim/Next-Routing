import React from 'react'

export default function CourseDetailsPage({ params }) {
    return (
        <>
            <main>
                <h1>This is the course detail page</h1>
            </main>
            <main>
                <h2>Course detail of {params.course_slug}</h2>
            </main>
        </>
    )
}
