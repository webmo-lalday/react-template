// src/pages/Home.jsx
export default function Home() {
    return (
        <article>
            <h1>Home page</h1>
            <svg viewBox="-10 -10 110 110" width={120} height={120}>
                {/** 
                 * line
                 <line x1={0} y1={0} x2={100} y2={100} />
                 * polyline
                 <polyline points="0 0, 100 50, 50 100" />
                 * circle
                 <circle cx="10" cy="10" r="15" />
                 * rect
                 <rect x="10" y="10" width="20" height="50" />>
                 * polygon
                 <polygon points="0 0, 100 50, 50 100" />
                 * path
                 */}
                 <path
                     d="M 4 4 h 16"
                 />
            </svg>
        </article>
    )
}