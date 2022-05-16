import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

import { SupportProps } from 'src/interfaces/pages'
import { LayoutProps } from 'src/interfaces/navigation'
import {
  SponsorFormData,
  DonationFormData,
  VolunteerFormData,
} from 'src/interfaces/forms'
import {
  Pill,
  Modal,
  Layout,
  Button,
  SponsorForm,
  DonationCard,
  VolunteerForm,
} from 'src/components'

type Props = {
  config: LayoutProps
  content: SupportProps
}

const pills = ['Donate', 'Volunteer', 'Sponsorship', 'Partnership']
const monthsArr = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const calculateCountdown = (endDate: string): any => {
  const convertDateToString = (date?: string) =>
    date ? String(new Date(date)) : String(new Date())

  let diff =
    (Date.parse(convertDateToString(endDate)) -
      Date.parse(convertDateToString())) /
    1000

  // clear countdown when date is reached
  if (diff <= 0) return false

  const timeLeft = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
    millisec: 0,
  }

  // calculate time difference between now and expected date
  if (diff >= 365.25 * 86400) {
    // 365.25 * 24 * 60 * 60
    timeLeft.years = Math.floor(diff / (365.25 * 86400))
    diff -= timeLeft.years * 365.25 * 86400
  }
  if (diff >= 86400) {
    // 24 * 60 * 60
    timeLeft.days = Math.floor(diff / 86400)
    diff -= timeLeft.days * 86400
  }
  if (diff >= 3600) {
    // 60 * 60
    timeLeft.hours = Math.floor(diff / 3600)
    diff -= timeLeft.hours * 3600
  }
  if (diff >= 60) {
    timeLeft.min = Math.floor(diff / 60)
    diff -= timeLeft.min * 60
  }
  timeLeft.sec = diff

  return timeLeft
}

const addLeadingZeros = (value: number | string) => {
  value = String(value)
  while (value.length < 2) {
    value = '0' + value
  }
  return value
}

const Support: FC<Props> = ({ config, content }) => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isModalOpen, openModal] = useState(false)
  const [currentPill, setCurrentPill] = useState(pills[0])

  const {
    title = '',
    description = '',
    // donate = {},
    // volunteer = {},
    // sponsorship = {},
    // partnership = {},
    records = [],
    next_session_title = '',
    next_session_date = '',
    next_session_bg_image = '',
  } = content as SupportProps

  const dateObject = new Date(next_session_date)
  const day = dateObject.getDate()
  const month = monthsArr[dateObject.getMonth() + 1]
  const year = dateObject.getFullYear()

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = calculateCountdown(next_session_date)

      if (timeLeft) {
        const { days: curDays, hours: curHours, min, sec } = timeLeft
        setDays(curDays)
        setHours(curHours)
        setMinutes(min)
        setSeconds(sec)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [next_session_date])

  const currentTitle = (content as any)[currentPill.toLowerCase()].title
  const currentDescription = (content as any)[currentPill.toLowerCase()]
    .description
  const currentImage = (content as any)[currentPill.toLowerCase()].image_url

  const handleDonation = async ({ amount }: DonationFormData) => {
    if (typeof window === 'undefined') {
      return
    }

    const handler = (window as any).PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
      email: 'donations@thesarzacademy.com',
      amount: +amount * 100,
      // label: 'Optional string that replaces customer email',
      onClose: function () {
        alert('Window closed.')
        openModal(false)
      },
      callback: function ({ reference }: any) {
        alert(`Payment complete! Reference: ${reference}`)
        openModal(false)
      },
    })

    handler.openIframe()
  }

  const handleSupportSubmission = async ({
    name,
    email,
    company,
  }: SponsorFormData) => {
    try {
      await axios({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_SF_URL}/sendEmail`,
        data: { formType: `${currentPill} Form`, name, email, company },
      })

      openModal(false)
      alert('Form submitted successfully')
    } catch (err) {
      alert(err?.response?.data?.message.substr(7) || err.toString())
    }
  }

  const handleVolunteerSubmission = async ({
    name,
    email,
    message,
    department,
  }: VolunteerFormData) => {
    try {
      await axios({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_SF_URL}/sendEmail`,
        data: {
          name,
          email,
          message,
          department,
          formType: `${currentPill} Form`,
        },
      })

      openModal(false)
      alert('Form submitted successfully')
    } catch (err) {
      alert(err?.response?.data?.message.substr(7) || err.toString())
    }
  }

  return (
    <Layout config={config}>
      <section className="primary-bg pt-32 md:pb-10">
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 pb-8">
            {!!title && (
              <h1 className="secondary-font text-4xl text-center sm:w-72 sm:mx-auto">
                {title}
              </h1>
            )}

            {!!description && (
              <p className="mt-8 mb-3 text-center md:w-full md:max-w-lg md:mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="alt1-bg">
        <div className="sz-container px-6 py-5 overflow-x-auto hide-scrollbar">
          <div className="flex items-center -mx-1.5 md:justify-center">
            {pills.map((pill, i) => (
              <div key={i} className="px-1.5">
                <Pill
                  label={pill}
                  active={pill === currentPill}
                  onClick={() => setCurrentPill(pill)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-24">
          <div className="lg:flex lg:flex-wrap lg:-mx-2 lg:items-center">
            <div className="lg:px-2 lg:w-1/2">
              {!!currentImage && (
                <img
                  alt={currentPill}
                  src={currentImage}
                  className="rounded-md w-full max-w-sm lg:max-w-lg mx-auto"
                />
              )}
            </div>

            <div className="lg:px-2 lg:w-1/2">
              {!!currentTitle && (
                <h3 className="mt-10 lg:mt-0 mb-6 secondary-font text-2xl text-center lg:text-left">
                  {currentTitle}
                </h3>
              )}

              {!!currentDescription && (
                <p className="text-center lg:text-left mb-6">
                  {currentDescription}
                </p>
              )}

              {currentPill === 'Sponsorship' && (
                <div className="mb-6 flex flex-wrap -mx-1.5">
                  <div className="px-5 w-1/2 sm:w-1/3 mb-4 flex flex-col justify-center">
                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 652 652"
                      className="w-full h-auto"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="red"
                        d="M606 262.2h-.4c-.4 0-.9.4-.9.9-.4 6.2-4.9 23.9-36.3 48.3-62.5 49.2-172.7 108.1-202 123.6-1.3.4-2.2.4-3.1 0-.9-.9 0-2.2 0-2.7l31-42.1s12.8-14.6 7.1-20.8c-3.5-3.5-21.3-.4-21.3-.4s-145.7 20.4-257.8-3.5c0 0-.4 0-.4.4v.4c24.4 7.1 112.5 29.7 239.2 23 .9 0 1.8.9 1.8 2.2 0 .4 0 .9-.4 1.3-6.6 8.4-24.4 30.6-53.2 60.7-7.1 8-11.5 12.4-5.8 17.7 5.3 4.4 14.6 0 14.6 0l79.7-38.1s116.5-56.7 166.5-93c64.7-44.6 47.5-71.7 41.7-77.9m-389.8-14.6c-4 0-7.1-1.3-9.3-4-2.2-2.7-2.7-6.2-1.8-10.6 2.2-7.5 9.7-13.7 17.7-13.7 4 0 7.1 1.3 9.3 4 2.2 2.7 2.7 6.2 1.8 10.2-2.2 8.4-9.7 14.1-17.7 14.1zm124.5 107.2c-4.4 0-8.4-.4-12-1.3-7.5-2.2-12.8-7.1-15.5-14.2-4.9-12.8 0-30.6 6.6-41.6 0-.4 19-36.3 64.7-43h3.5c7.5 0 12.8 2.2 16.4 6.2 4.9 6.2 2.7 14.2 2.7 14.6-.4.9-6.6 27.9-55.8 38.1-5.3.9-8.9.9-11.1.9H338c-.9 2.2-3.1 8.9-.9 14.6 1.3 3.1 4 5.8 8 7.5 2.7.9 6.2 1.3 9.3 1.3 19.5 0 39-17.7 39-18.2 0 0 1.3-.9 4.4-4h.4c.4 0 .9-.4 1.3-.4.9 0 1.8.4 2.2.9.4.4.9 1.8.9 2.7 0 .4 0 .9-.4 1.8-.9 2.2-4.9 10.6-22.1 22.6-8 4.9-15.9 8.4-24.4 10.2-5.7.9-10.6 1.3-15 1.3zm35.4-83.3h-2.2c-5.8.4-11.5 2.7-17.3 7.1-10.6 8-15.9 19.5-15.9 19.5-.4.4-.4 1.3 0 2.2.4.9 1.8 1.3 3.5 1.3h1.3c4.9 0 12.4-.4 23-5.8 5.8-3.1 9.7-6.6 12-11.1 1.8-3.5 2.2-6.6 2.2-6.6s.4-2.7-1.3-4.9c-.4-.8-2.6-1.7-5.3-1.7zm43.4 77.1c-4.9-.4-8.4-4.4-8.4-8.9 0-1.3.4-2.7.9-4 .9-1.3 5.8-10.2 58.5-106.7.4-.4.4-.9.9-1.3l.4-.4c3.1-4.4 8-7.1 13.3-7.5h2.2c4.9.4 8.4 4.4 8.4 8.9 0 1.3-.4 2.7-.9 4-.9 1.3-5.8 10.2-58.5 106.7-.4.4-.4.9-.9 1.3l-.4.4c-3.1 4.4-8 7.1-13.3 7.5h-2.2zm-169.2 6.2c-8.4 0-16.4-4.4-20.8-12l-1.3-2.7c-2.2-6.6-.9-13.7 0-16.8.4-2.7.9-3.1 11.5-22.6 3.1-5.8 6.2-11.5 11.5-21.7h-18.6c-.4 0-.9 0-1.3-.4s-.9-.4-1.3-.9c0-.4-.4-.4-.4-.9-.4-.9-.4-2.7 0-3.5l2.7-4.9c.9-1.8 2.2-3.5 4-5.3 2.7-2.7 5.8-4 9.3-4.4h16.8l13.3-24.4c.4-.4.4-.9.9-1.3l.4-.4c3.1-4.4 8-7.1 13.3-7.5h2.2c4.9.4 8.4 4.4 8.4 8.9 0 1.3-.4 2.7-.9 4-.4.9-12 21.3-12 21.3h23.9c.9 0 1.8.4 2.7.9.4.4.4.4.4.9.4.9.9 2.7 0 3.5 0 0-4 7.1-4.4 7.5-2.7 4-6.6 6.2-11.1 6.6h-22.1l-23 42.1s-4.9 8.4-3.1 13.3c.4 1.3 1.3 2.2 3.1 3.1 1.8.4 3.5.9 5.8.9 7.5 0 16.8-4.4 26.6-12l.4-.4c1.3-.9 2.7-1.8 3.5-2.2h.4c.4 0 .9-.4 1.3-.4 1.8 0 3.1 1.3 3.1 3.1 0 .4 0 .9-.4 1.3l-1.8 3.1c-4 7.1-9.7 12.8-16.8 17.3-6.2 4-13.7 5.8-21.3 6.2h-4.9v.7zm-90.3-6.2c-4.9-.4-8.4-4.4-8.4-8.9 0-1.3.4-2.7.9-4 .4-.9 37.2-68.2 37.2-68.2.4-.4.4-.9.9-1.3l.4-.4c3.1-4.4 8-7.1 13.3-7.5h2.2c4.9.4 8.4 4.4 8.4 8.9 0 1.3-.4 2.7-.9 4-.4.9-37.2 68.2-37.2 68.2-.4.4-.4.9-.9 1.3l-.4.4c-3.1 4.4-8 7.1-13.3 7.5H160zm329.1-151.5c.4 0 .4 0 0 0 .4-.4 0-.4 0-.4-44.7-11.5-85.9-16.4-127.6-19-148.4-8.9-273.3 22.6-322 60.7C5.8 264 12 289.3 14.7 296.3l.4.4c.4 0 .4 0 .4-.4 1.3-8 12-40.3 86.4-67.3 34.1-11.1 98.8-35 219.2-40.7 84.3-1.8 147.6 7.1 168 8.8z"
                      />
                    </svg>
                  </div>

                  <div className="px-5 w-1/2 sm:w-1/3 mb-4 flex flex-col justify-center">
                    <svg
                      className="w-full h-auto"
                      viewBox="0 0 115 31"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          x1=".233%"
                          y1="50.009%"
                          x2="100.088%"
                          y2="50.009%"
                          id="a"
                        >
                          <stop stopColor="#06F" offset="6%" />
                          <stop stopColor="#33DDFA" offset="53%" />
                          <stop stopColor="#A6FFCB" offset="92%" />
                        </linearGradient>
                        <linearGradient
                          x1="0%"
                          y1="50%"
                          x2="100%"
                          y2="50%"
                          id="b"
                        >
                          <stop stopColor="#0089FF" offset="0%" />
                          <stop stopColor="#12D8FA" offset="49%" />
                          <stop stopColor="#A6FFCB" offset="100%" />
                        </linearGradient>
                      </defs>
                      <g fillRule="nonzero" fill="none">
                        <path
                          d="M45.921 14.933c.242-.174.458-.377.644-.606.383-.467.59-1.045.585-1.64a3.258 3.258 0 0 0-1.288-2.776 5.562 5.562 0 0 0-3.35-.903h-4.129a.376.376 0 0 0-.383.369v12.242a.362.362 0 0 0 .11.264c.073.07.17.11.273.11h5.022a5.279 5.279 0 0 0 3.317-.946 3.422 3.422 0 0 0 1.273-2.837c.016-.831-.27-1.641-.81-2.29a3.217 3.217 0 0 0-1.264-.987Zm-5.434 1.305h2.948a2.272 2.272 0 0 1 1.533.558c.375.362.573.86.545 1.371.037.488-.154.966-.52 1.305a2.336 2.336 0 0 1-1.573.473h-2.948l.015-3.707Zm3.705-2.45a1.94 1.94 0 0 1-1.307.416h-2.398v-3.153h2.039a2.713 2.713 0 0 1 1.636.41c.352.3.534.743.492 1.192a1.39 1.39 0 0 1-.462 1.135ZM52.987 12.004c-1.118-.054-2.197.462-2.92 1.398a5.616 5.616 0 0 0-1.064 3.504v.181a5.61 5.61 0 0 0 1.068 3.509c.755.895 1.818 1.404 2.93 1.404 1.114 0 2.176-.51 2.931-1.404a5.607 5.607 0 0 0 1.064-3.513V16.9a5.61 5.61 0 0 0-1.068-3.508c-.733-.934-1.818-1.446-2.941-1.389Zm0 2.013c.544-.032 1.061.262 1.35.769.352.644.525 1.388.497 2.138v.182a4.172 4.172 0 0 1-.498 2.152c-.309.476-.81.76-1.343.76-.533 0-1.033-.284-1.342-.76a4.203 4.203 0 0 1-.494-2.152v-.182a4.218 4.218 0 0 1 .494-2.143c.282-.505.796-.798 1.336-.764ZM62.99 12.004c-1.12-.054-2.2.462-2.926 1.398a5.635 5.635 0 0 0-1.06 3.503v.182a5.61 5.61 0 0 0 1.064 3.508c.756.896 1.82 1.405 2.934 1.405s2.178-.51 2.934-1.405a5.626 5.626 0 0 0 1.06-3.513v-.181a5.61 5.61 0 0 0-1.064-3.509c-.734-.932-1.82-1.443-2.943-1.388Zm0 2.013c.544-.032 1.06.263 1.35.769.352.644.525 1.387.497 2.138v.182a4.216 4.216 0 0 1-.494 2.152c-.31.476-.81.759-1.345.759-.535 0-1.036-.283-1.346-.759a4.201 4.201 0 0 1-.494-2.152v-.182a4.17 4.17 0 0 1 .498-2.143c.282-.504.794-.798 1.333-.764ZM77.725 12.003a3.195 3.195 0 0 0-1.787.505c-.331.217-.625.49-.868.807a2.638 2.638 0 0 0-.813-.835 3.028 3.028 0 0 0-1.705-.473 3.592 3.592 0 0 0-1.713.397 3.217 3.217 0 0 0-.652.472l-.033-.354a.367.367 0 0 0-.358-.335h-1.438a.363.363 0 0 0-.358.368v9.072a.374.374 0 0 0 .103.263c.068.07.16.11.255.11h1.608c.096 0 .188-.04.255-.11a.374.374 0 0 0 .103-.263v-6.612c.127-.262.321-.484.56-.642a1.8 1.8 0 0 1 1.03-.302 1.24 1.24 0 0 1 1.043.472c.295.488.429 1.061.38 1.634v5.45a.374.374 0 0 0 .104.263c.067.07.16.11.255.11h1.617c.096 0 .188-.04.255-.11a.374.374 0 0 0 .103-.263v-5.823a2.19 2.19 0 0 1 .51-1.26c.268-.315.66-.489 1.066-.473.397-.035.788.122 1.057.425.292.5.421 1.082.367 1.662v5.469c0 .206.163.373.363.373h1.603c.2 0 .363-.167.363-.373v-5.44c0-1.36-.294-2.404-.868-3.103a2.968 2.968 0 0 0-2.407-1.081Z"
                          fill="#FFF"
                        />
                        <rect
                          fill="#FFF"
                          x="93"
                          y="9"
                          width="2"
                          height="14"
                          rx=".78"
                        />
                        <path
                          d="M104.822 20.52a7.98 7.98 0 0 1-.046-.883V15.34a3.14 3.14 0 0 0-1.03-2.504 3.904 3.904 0 0 0-2.589-.832 3.973 3.973 0 0 0-2.67.892 2.497 2.497 0 0 0-1.016 2.082.247.247 0 0 0 0 .097v.047a.36.36 0 0 0 .34.25h1.505a.358.358 0 0 0 .354-.362.833.833 0 0 1 .345-.669 1.547 1.547 0 0 1 1.02-.311c.39-.032.777.097 1.075.358.25.257.38.612.358.975v.52h-1.36a5.016 5.016 0 0 0-2.944.767 2.682 2.682 0 0 0-1.16 2.3 3.02 3.02 0 0 0 .82 2.225c.636.58 1.473.875 2.322.818a3.272 3.272 0 0 0 1.714-.465c.25-.153.486-.33.703-.53.027.168.06.354.1.549a.351.351 0 0 0 .35.293h1.632a.356.356 0 0 0 .285-.15.37.37 0 0 0 .055-.32 4.48 4.48 0 0 1-.163-.85Zm-2.345-2.852v1.017a1.877 1.877 0 0 1-.735.8 2.406 2.406 0 0 1-1.36.399 1.173 1.173 0 0 1-.83-.251.876.876 0 0 1-.245-.674c.01-.35.177-.676.454-.883.372-.293.836-.439 1.306-.408h1.41ZM114.929 12.155a.32.32 0 0 0-.271-.155h-1.65a.33.33 0 0 0-.313.246L111 17.77l-1.695-5.506a.342.342 0 0 0-.318-.246h-1.653a.329.329 0 0 0-.274.154.382.382 0 0 0-.04.329l2.967 8.439-.305.788a4.33 4.33 0 0 1-.466.91.577.577 0 0 1-.505.301c-.025 0-.11 0-.368-.023-.331-.027-.59-.045-.628.296a.323.323 0 0 0 0 .064l-.14 1.189a.36.36 0 0 0 .246.392c.115.031.263.059.462.09.168.03.338.047.509.05.674.031 1.327-.249 1.797-.769a4.982 4.982 0 0 0 .953-1.658l3.446-10.1a.376.376 0 0 0-.06-.315ZM88.289 12.002a3.358 3.358 0 0 0-1.614.374 3.02 3.02 0 0 0-.695.501l-.094-.433a.354.354 0 0 0-.343-.282h-1.195a.344.344 0 0 0-.248.105.36.36 0 0 0-.1.255V24.64a.36.36 0 0 0 .1.254.344.344 0 0 0 .248.106h1.56a.344.344 0 0 0 .248-.106.36.36 0 0 0 .1-.254v-3.446c.164.12.34.223.526.306a3.691 3.691 0 0 0 1.534.3 3.25 3.25 0 0 0 2.72-1.294 5.282 5.282 0 0 0 .958-3.277v-.168a6.299 6.299 0 0 0-.945-3.614 3.163 3.163 0 0 0-2.76-1.445Zm1.449 5.059v.168c.03.684-.147 1.361-.508 1.937a1.557 1.557 0 0 1-1.391.675 1.8 1.8 0 0 1-.977-.246 1.914 1.914 0 0 1-.606-.638v-4.043c.15-.26.358-.482.606-.647.291-.177.625-.265.963-.255a1.509 1.509 0 0 1 1.391.788c.372.691.552 1.473.522 2.26Z"
                          fill="#FFF"
                        />
                        <circle fill="#000" cx="15.5" cy="15.5" r="15.5" />
                        <path
                          d="M21.915 10.485c.44-2.778-.825-4.272-3.797-4.482h-4.123a1.535 1.535 0 0 0-1.602 1.235l-.322 1.145 3.592-.113c.806-.174 1.817.47 2.38 1.605.634 1.262.396 2.417-.442 2.844-.839.427-1.957-.038-2.59-1.295-.466-.939-.499-1.793-.121-2.417l-2.977.094-2.11 7.255 4.476-.179c1.063-.239 2.404.615 3.159 2.089.848 1.656.647 3.167-.466 3.754-1.113.587-2.679 0-3.526-1.661-.643-1.253-.68-2.417-.191-3.243l-3.727.145s-1.374 4.783-1.398 4.96c-.063.258-.106.52-.13.785C8 24.107 8.886 25 9.98 25h3.056c3.96-.211 6.55-2.079 7.793-5.561.547-2.637-.385-4.202-2.795-4.693l.028-.103c1.876-.557 3.16-1.943 3.853-4.158Z"
                          fill="url(#a)"
                        />
                        <path
                          d="M15 2C7.268 2 1 8.268 1 16s6.268 14 14 14 14-6.268 14-14c-.008-7.729-6.271-13.992-14-14Zm0 27.047A13.051 13.051 0 1 1 28.047 16C28.039 23.202 22.202 29.039 15 29.047Z"
                          fill="url(#b)"
                        />
                      </g>
                    </svg>
                  </div>

                  <div className="px-5 w-1/2 sm:w-1/3 mb-4 flex flex-col justify-center">
                    <svg
                      className="w-full h-auto"
                      viewBox="-18.75 -10 162.5 60"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.409 13.754a3.254 3.254 0 0 0-2.295-2.295c-2.023-.541-10.139-.541-10.139-.541s-8.112 0-10.139.541a3.254 3.254 0 0 0-2.295 2.295C0 15.777 0 20 0 20s0 4.223.541 6.246a3.254 3.254 0 0 0 2.295 2.295c2.027.541 10.139.541 10.139.541s8.116 0 10.139-.541a3.254 3.254 0 0 0 2.295-2.295c.541-2.023.541-6.246.541-6.246s0-4.223-.541-6.246z"
                        fill="red"
                      />
                      <path fill="#FFF" d="M10.382 16.107v7.786L17.124 20z" />
                      <path
                        fill="#FFF"
                        d="M37.666 27.443c-.512-.347-.879-.883-1.094-1.614-.215-.731-.326-1.701-.326-2.915v-1.651c0-1.226.124-2.209.372-2.952.248-.743.636-1.284 1.16-1.622.524-.339 1.214-.512 2.068-.512.842 0 1.515.173 2.023.52.508.347.879.888 1.115 1.622.235.735.351 1.717.351 2.939v1.651c0 1.214-.116 2.188-.343 2.923-.227.735-.599 1.276-1.115 1.614-.512.339-1.21.512-2.089.512-.9.005-1.61-.168-2.122-.515zm2.877-1.783c.14-.372.215-.978.215-1.816v-3.546c0-.817-.07-1.412-.215-1.792-.14-.376-.392-.566-.751-.566-.347 0-.59.19-.735.566-.14.376-.215.974-.215 1.792v3.546c0 .842.066 1.449.202 1.816.136.372.384.557.743.557.364 0 .612-.186.756-.557zm36.535-2.717v.574c0 .731.021 1.276.066 1.643.041.363.132.632.268.797.136.165.347.252.632.252.384 0 .648-.149.788-.446.14-.297.219-.793.231-1.486l2.209.128c.012.099.017.235.017.409 0 1.053-.289 1.837-.863 2.357-.574.52-1.387.78-2.44.78-1.263 0-2.147-.396-2.654-1.189-.508-.793-.76-2.015-.76-3.674v-1.986c0-1.709.264-2.952.788-3.74.524-.784 1.424-1.177 2.7-1.177.879 0 1.552.161 2.023.483.471.322.801.822.995 1.503.19.681.289 1.622.289 2.82v1.949h-4.289zm.326-4.788c-.128.161-.215.425-.26.788-.045.363-.066.921-.066 1.66v.817h1.874v-.817c0-.731-.025-1.284-.074-1.66-.05-.376-.14-.644-.268-.797-.128-.153-.33-.231-.603-.231-.273-.004-.475.079-.603.24zm-45.972 4.574-2.915-10.523h2.543l1.02 4.768c.26 1.177.45 2.176.574 3.005h.074c.087-.594.277-1.589.574-2.989l1.057-4.789h2.543l-2.948 10.527v5.049h-2.522zM51.603 16.4v11.373h-2.002l-.223-1.391h-.054c-.545 1.053-1.362 1.577-2.448 1.577-.755 0-1.313-.248-1.672-.743s-.537-1.267-.537-2.32V16.4h2.559v8.351c0 .508.054.871.165 1.086.111.215.297.326.557.326.223 0 .438-.066.64-.202s.355-.31.454-.52V16.4zm13.136 0v11.373h-2.002l-.223-1.391h-.054c-.545 1.053-1.362 1.577-2.448 1.577-.755 0-1.313-.248-1.672-.743s-.537-1.267-.537-2.32V16.4h2.559v8.351c0 .508.054.871.165 1.086.111.215.297.326.557.326.223 0 .438-.066.64-.202s.355-.31.454-.52V16.4z"
                      />
                      <path
                        fill="#FFF"
                        d="M58.563 14.266H56.02v13.508h-2.506V14.266h-2.543v-2.06h7.588v2.06zm14.651 3.955c-.157-.718-.405-1.238-.751-1.56-.347-.322-.822-.483-1.428-.483-.471 0-.908.132-1.317.4a2.684 2.684 0 0 0-.945 1.049h-.021v-5.994h-2.469v16.145h2.114l.26-1.077h.054c.198.384.495.685.892.908.396.223.834.334 1.317.334.867 0 1.503-.4 1.911-1.197.409-.797.611-2.043.611-3.74v-1.8c.003-1.272-.075-2.267-.228-2.985zm-2.349 4.64c0 .83-.033 1.478-.103 1.949-.066.471-.182.805-.343 1.003a.79.79 0 0 1-.648.297 1.14 1.14 0 0 1-1.024-.595v-6.461c.087-.31.235-.561.446-.76.211-.198.438-.297.685-.297.26 0 .462.103.603.305.14.202.239.549.297 1.028.054.483.083 1.168.083 2.06v1.47h.004zm13.938 5.082h2.271V15.162l2.504 12.781h2.096l2.62-13.072v13.088h2.213V12.206h-3.61l-2.242 12.447-2.358-12.447h-3.494zm18.4.016h1.805V16.4h-2.446v9.127c-.408.699-1.863 1.281-1.863-.116v-9.01h-2.446v9.36c0 1.98 2.679 3.727 4.542.757zM114.441 16.4h2.271v11.559h-2.271zm1.194-1.354a1.431 1.431 0 0 1-1.427-1.427v-.349c0-.785.642-1.427 1.427-1.427s1.427.642 1.427 1.427v.349a1.432 1.432 0 0 1-1.427 1.427zm-4.862 5.037h1.98c.058-.961.116-3.872-2.97-3.872-2.562 0-3.261 1.63-3.261 3.086s.738 2.484 2.834 4.115c1.786.932 1.863 3.067.388 3.067-.699 0-1.126-.466-1.126-1.126v-1.048h-2.096v1.203c0 1.048.699 2.64 3.144 2.64 2.446 0 3.3-1.359 3.3-3.455s-4.425-4.154-4.425-5.59c0-1.669 2.203-1.485 2.203-.272zm10.112-.942c-.233 2.64-.039 4.658.039 5.939.106 1.744 1.941 1.747 1.941-.039V23.76H125c0 2.329-.815 4.231-3.106 4.231-2.679 0-3.455-1.902-3.455-3.921v-3.377c0-2.717 1.165-4.542 3.377-4.542 2.95 0 3.028 2.096 3.028 3.067v1.281l-1.98.155v-1.553c.001-1.086-1.358-2.056-1.979.04z"
                      />
                      <path fill="none" d="M0 0h125v40H0z" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="w-48 mx-auto lg:ml-0 pt-4">
                <Button onClick={() => openModal(true)}>
                  <span className="secondary-font">{currentPill}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alt3-bg">
        <div className="sz-container px-6 pt-8 md:pt-24 md:pb-16">
          <h2 className="secondary-font text-center text-3xl">
            Our Track Records
          </h2>

          <div className="mt-12 flex flex-wrap -mx-1.5">
            {records.map(({ label, value }, i) => (
              <div key={i} className="px-1.5 w-1/2 md:w-1/3 text-center mb-8">
                <h4 className="secondary-font text-2xl">{value}</h4>
                <span className="opacity-60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="hero-wrapper bg-repeat bg-center"
        style={{ backgroundImage: `url(${next_session_bg_image})` }}
      >
        <div className="sz-container px-6 py-8 md:py-24 relative z-10">
          {!!next_session_title && (
            <h2 className="secondary-font text-center text-3xl">
              {next_session_title}
            </h2>
          )}

          <h5 className="text-center text-lg mt-10 mb-14 uppercase">
            {day} {month} {year}
          </h5>

          <div className="flex flex-wrap text-5xl justify-center secondary-font text-center">
            <div>
              <h5 className="mb-4">{addLeadingZeros(days)}</h5>
              <p className="opacity-60 text-base primary-font">Days</p>
            </div>

            <div>
              <h5 className="mb-4">
                <span className="inline-block mx-3">:</span>
                {addLeadingZeros(hours)}
                <span className="inline-block mx-3">:</span>
              </h5>
              <p className="opacity-60 text-base primary-font">Hours</p>
            </div>

            <div>
              <h5 className="mb-4">
                {addLeadingZeros(minutes)}
                <span className="inline-block mx-3">:</span>
              </h5>
              <p className="opacity-60 text-base primary-font -ml-8">Minutes</p>
            </div>

            <div>
              <h5 className="mb-4">{addLeadingZeros(seconds)}</h5>
              <p className="opacity-60 text-base primary-font">Seconds</p>
            </div>
          </div>
        </div>
      </section>

      <Modal isModalOpen={isModalOpen} openModal={() => openModal(false)}>
        {currentPill === 'Donate' && (
          <div className="w-full max-w-sm md:max-w-xl mx-auto">
            <DonationCard handleSubmit={handleDonation} />
          </div>
        )}

        {currentPill === 'Volunteer' && (
          <VolunteerForm handleSubmit={handleVolunteerSubmission} />
        )}

        {(currentPill === 'Sponsorship' || currentPill === 'Partnership') && (
          <SponsorForm
            title={currentPill}
            handleSubmit={handleSupportSubmission}
            description="Please fill out the form and we’ll respond to you as soon as possible."
          />
        )}
      </Modal>
    </Layout>
  )
}

export async function getStaticProps(): Promise<any> {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/support`
    )
    const { menu = [], facebook = '', instagram = '', twitter = '' } = data
    const {
      title = '',
      description = '',
      donate = {},
      volunteer = {},
      sponsorship = {},
      partnership = {},
      records = [],
      next_session_title = '',
      next_session_date = '',
      next_session_bg_image = '',
    } = data

    return {
      props: {
        config: { menu, facebook, instagram, twitter },
        content: {
          title,
          description,
          donate,
          volunteer,
          sponsorship,
          partnership,
          records,
          next_session_title,
          next_session_date,
          next_session_bg_image,
        },
      },
    }
  } catch (err) {
    return {
      props: {
        config: {
          menu: [],
          facebook: '',
          instagram: '',
          twitter: '',
        },
        content: {
          title: '',
          description: '',
          donate: {
            title: '',
            description: '',
            image_url: '',
          },
          volunteer: {
            title: '',
            description: '',
            image_url: '',
          },
          sponsorship: {
            title: '',
            description: '',
            image_url: '',
          },
          partnership: {
            title: '',
            description: '',
            image_url: '',
          },
          records: [],
          next_session_title: '',
          next_session_date: '',
          next_session_bg_image: '',
        },
      },
    }
  }
}

export default Support
