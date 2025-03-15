import React from 'react'
import image from "@/app/images/banner.webp"
import Image from 'next/image'
import Link from 'next/link'

export default function CoursePage() {
    return (
        <>
            <main>
                <h1>Course Page</h1>
            </main>
            <main>
                <ul>
                    <li>
                        <Link href={'/course/course-details/course-1'} >
                            Course 1
                        </Link>
                    </li>
                    <li>
                        <Link href={'/course/course-details/course-2'} >
                            Course 2
                        </Link>
                    </li>
                    <li>
                        <Link href={'/course/course-details/course-3'} >
                            Course 3
                        </Link>
                    </li>
                    <li>
                        <Link href={'/course/course-details/course-4'} >
                            Course 4
                        </Link>
                    </li>
                    <li>
                        <Link href={'/course/course-details/course-5'} >
                            Course 5
                        </Link>
                    </li>
                </ul>
            </main>
            <main>
                <div style={{
                    width: 500,
                    height: 500,
                    position: "relative"
                }}>
                    <Image
                        src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg"
                        alt="Gaming Xbox"
                        fill
                    />
                </div>
            </main>
        </>
    )
}

{/* <Image alt='pic' fill src={image.src} /> */ }
{/* <img src={image.src} /> */ }