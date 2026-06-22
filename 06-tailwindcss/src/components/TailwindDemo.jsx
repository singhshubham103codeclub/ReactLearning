import React from 'react'

const cards = [
  { id: 1, title: 'Design System', desc: 'Reusable components and tokens to build consistent UIs.' },
  { id: 2, title: 'Components', desc: 'Buttons, inputs, cards and other building blocks.' },
  { id: 3, title: 'Patterns', desc: 'Common UI patterns for layout and navigation.' },
]

export default function TailwindDemo(){
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <header className="w-full max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Tailwind Demo</h1>
            <p className="text-sm text-gray-600 mt-1">Small demo with dummy data to illustrate Tailwind utilities.</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">New Project</button>
        </div>
      </header>

      <main className="w-full max-w-4xl mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(c => (
            <article key={c.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h2 className="text-lg font-semibold text-gray-800">{c.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500">Updated 2d ago</span>
                <button className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded">Open</button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
