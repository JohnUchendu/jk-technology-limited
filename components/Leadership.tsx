'use client'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'

const team = [
  {
    name: "Jane Smith",
    role: "Technical Director",
    bio: "Jane leads our development teams with 8+ years experience in building scalable software solutions for various industries.",
    image: "/#"
  },
  {
    name: "John Uchendu",
    role: "Chief Executive Officer",
    bio: "With over a decade years in technology leadership, John drives our vision for delivering enterprise-grade solutions to Nigerian businesses.",
    image: "/founder/ceo.jpeg"
  },
  {
    name: "Mike Johnson",
    role: "Head of Client Success",
    bio: "Mike ensures our clients achieve their business objectives through technology, with a focus on measurable ROI and growth.",
    image: "/#"
  }
]

function TeamMemberImage({ member }: { member: typeof team[0] }) {
  const [imageError, setImageError] = useState(false)
  const initials = member.name.split(' ').map(n => n[0]).join('')

  if (imageError) {
    return (
      <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
        {initials}
      </div>
    )
  }

  return (
    <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
      <Image
        src={member.image}
        alt={member.name}
        width={128}
        height={128}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        onError={() => setImageError(true)}
        priority={member.name === "John Uchendu"} // Prioritize loading CEO image
      />
    </div>
  )
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The faces behind JK Technology Limited - experienced professionals committed to your business success
          </p>
          {/* <div className="mt-4 inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-blue-700">
              ✓ CAC Registered Company • RC-8754824
            </span>
          </div> */}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <TeamMemberImage member={member} />
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}