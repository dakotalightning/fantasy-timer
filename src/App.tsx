import { useMemo, useState } from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Misc',
    time: [
      { id: 1, label: '1 Hour', minutes: 60 },
      { id: 10, label: '1 minute', minutes: 1 },
      { id: 15, label: '5 minute', minutes: 5 },
      { id: 18, label: '15 minute', minutes: 15 },
      { id: 19, label: '30 minute', minutes: 30 },
    ],
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Short Rest',
    time: [
      { id: 1, label: '1 Hour', minutes: 60 }
    ],
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Long Rest',
    time: [
      { id: 2, label: '8 Hours', minutes: 480 }
    ],
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Exploration',
    time: [
      { id: 3, label: '1 Hour', minutes: 60 },
      { id: 4, label: '30 mins', minutes: 30 },
    ],
    description: 'enough time to search a few rooms in a dungeon or visit 3 shops',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Basic Dungeon Actions',
    time: [
      { id: 5, label: '10 mins', minutes: 10 },
    ],
    description: 'This would be actions like walking stealthily down a long corridor, searching 1 room, talking/planning, buffing before entering a room, etc.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Traveling',
    time: [
      { id: 6, label: '8 Hours', minutes: 480 }
    ],
    description: 'Given it is well-maintained roads and they are traveling at a normal pace, players should be able to travel to a moderate distance in this time, 8 hours (more or less depending on how far the destination is)',
    icon: CloudArrowUpIcon,
  }
]

const App = () => {
  const [minutes, setMinutes] = useState(0)

  const output = useMemo(() => {
    const hours = Math.floor(minutes / 60)
    const min = Math.round(((minutes / 60) % 1) * 60)

    // `${Math.floor(minutes / 60)} hours ${((minutes / 60) % 1) * 60} minutes`


    console.log(hours, min)
    if (hours === 0 && min === 0) {
      return `No time`
    }
    if (hours === 0) {
      return `${min} min`
    }
    if (hours >= 1 && min >= 1) {
      return `${hours} hr & ${min} min`
    }
    if (hours >= 1 && min < 1) {
      return `${hours} hr`
    }

  }, [minutes])

  return (
    <div className="bg-gray-900 py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-500">
            Time past
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            {output}

            {minutes > 0 && (
              <span onClick={() => {
                setMinutes(0)
              }} className="ml-2 text-sm underline text-gray-400 cursor-pointer">
                Reset
              </span>
            )}
          </p>


        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-200">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <div className="flex flex-wrap gap-2">
                  {feature.time.map((t) => (
                    <button key={t.id} onClick={() => {
                      setMinutes((m) => m + t.minutes)
                    }} className="my-2 px-3 py-1 bg-indigo-500 text-indigo-100 rounded-lg">
                      {t.label}
                    </button>
                  ))}
                </div>
                <dd className="mt-2 text-base leading-6 text-gray-500">
                  <span className="text-sm">{feature.description}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default App
