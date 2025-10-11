import React from 'react'


export default function ProjectCard({ project }){
return (
<article className="p-5 border rounded-xl hover:shadow-lg transition">
<h3 className="font-semibold mb-2">{project.title}</h3>
<p className="text-sm text-gray-600 mb-3">{project.desc}</p>
<div className="flex gap-2 mb-3">{project.tags.map(t=> <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>)}</div>
<div className="flex justify-between items-center">
<a href={project.link} className="text-sm text-primary">View</a>
<button className="text-sm text-gray-500">Details</button>
</div>
</article>
)
}