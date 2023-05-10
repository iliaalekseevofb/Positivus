'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import SectionHeader from '../../elements/SectionHeader/SectionHeader'
import styles from './WorkingProcesses.module.scss'
import Image from 'next/image'

interface ProcessesType {
  id: string,
  opened: boolean
}

type WorkingProcessType = {
  id: string,
  title: string,
  description: string,
}

type WorkingProcessProps = WorkingProcessType & {
  number: number,
  openedProcesses: ProcessesType[],
  setOpenedProcesses: Dispatch<SetStateAction<ProcessesType[]>>
}

const workingProcesses: WorkingProcessType[] = [
  { id: 'consultation', title: 'Consultation', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { id: 'research', title: 'Research and Strategy Development', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { id: 'implementation', title: 'Implementation', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { id: 'monitoring', title: 'Monitoring and Optimization', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { id: 'reporting', title: 'Reporting and Communication', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { id: 'improvement', title: 'Continual Improvement', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' }
]

const WorkingProcess = ({
  id,
  title,
  description,
  number,
  openedProcesses,
  setOpenedProcesses
}: WorkingProcessProps) => {
  const newOpenedProcesses = [...openedProcesses];
  const processIndex = newOpenedProcesses.findIndex(process => process.id === id);
  const processOpened = newOpenedProcesses[processIndex].opened

  const toggleOpenedProcess = () => {
    newOpenedProcesses[processIndex].opened = !processOpened;

    setOpenedProcesses(newOpenedProcesses);
  }

  return (
    <div
      opened={openedProcesses[processIndex].opened.toString()}
      onClick={() => toggleOpenedProcess()}
      className={styles.workingProcess}
    >
      <div className={styles.workingProcess__header}>
        <div className={styles.workingProcess__header_title}>
          <h1>0{ number }</h1>
          <h3>{ title }</h3>
        </div>
        <div className={styles.workingProcess__header_icon}>
          <Image
            src={ openedProcesses[processIndex].opened
              ? '/icons/MinusIcon.svg'
              : '/icons/PlusIcon.svg'
            }
            alt='Sign icon'
            style={{objectFit: 'contain'}}
            fill
          />
        </div>
      </div>
      { openedProcesses[processIndex].opened && (
        <div className={styles.workingProcess__description}>
          <p>{ description }</p>
        </div>
      ) }
    </div>
  )
}

const WorkingProcesses = (): JSX.Element => {
  const [openedProcesses, setOpenedProcesses] = useState<ProcessesType[]>([
    { id: 'consultation', opened: false },
    { id: 'research', opened: false },
    { id: 'implementation', opened: false },
    { id: 'monitoring', opened: false },
    { id: 'reporting', opened: false },
    { id: 'improvement', opened: false },
  ])

  return (
    <div className={styles.workingProcesses}>
      <SectionHeader
        title='Our Working Process'
        description='Step-by-Step Guide to Achieving Your Business Goals'
      />
      <div className={styles.workingProcesses__processes}>
        { workingProcesses.map((process: WorkingProcessType, index: number) => (
          <WorkingProcess
            key={index}
            id={process.id}
            number={index+1}
            title={process.title}
            description={process.description}
            openedProcesses={openedProcesses}
            setOpenedProcesses={setOpenedProcesses}
          />
        )) }
      </div>
    </div>
  )
}

export default WorkingProcesses