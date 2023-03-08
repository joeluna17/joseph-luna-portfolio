import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { Button, Box, Typography, styled as MuiStyled } from '@mui/material'
import Layout from '@/components/Layout'

const SkillsContainter = MuiStyled(Box)(({ theme }) => ({
  height: 800,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 50,
}))

type TSkillData = {
  id: number
  skill: string
  link: string
}

const skillsData: TSkillData[] = [
  { id: 1, skill: 'React', link: '#react' },
  { id: 2, skill: 'Angular', link: '#angular' },
  { id: 3, skill: 'Javscript', link: '#javascript' },
  { id: 4, skill: 'Typescript', link: '#typescript' },
]

export default function Home() {
  return (
    <Layout title='Joe Luna Dev'>
      <Box style={{ position: 'relative', width: '100vw' }}>
        <Box sx={{ position: 'absolute', zIndex: '555', fontWeight: 700, color: '#fff', top: '30%', left: 'calc(100vw - 98vw)', padding: 0, textAlign: 'left', '@media(max-width: 780px)': { textAlign: 'center' } }}>
          <Typography variant='h1'>
            Joseph Luna Portfolio<Blink>|</Blink>
          </Typography>
          <Typography variant='h3' sx={{ marginTop: '2%', color: 'var(--tertiary-color)' }}>
            Full Stack Developer
          </Typography>
        </Box>
        <Box style={{ position: 'relative', width: '100vw', height: '80vh', filter: 'blur(6px) grayscale(5%)' }}>
          <Image alt='Joe Luna Hero' fill src='https://res.cloudinary.com/dbqzzps1w/image/upload/v1676857513/portfolio/homepage/port_hero_image.jpg' />
        </Box>
      </Box>
      <Box sx={{ width: '100%', maxWidth: `var(--max-width)`, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3% 3%' }}>
        <Button variant='contained' color='appPrimary' style={{ width: '375px', height: '60px' }}>
          CONTACT ME
        </Button>
        <Box sx={{ width: '100%', maxWidth: `var(--max-width)`, display: 'flex', flexDirection: 'column', padding: '3% 0', '@media(max-width: 780px)': { textAlign: 'center' } }}>
          <Typography variant='h3'>A Bit About Me</Typography>
          <Typography variant='body1'>
            Hi, my name is Joseph Luna, but please call me Joe! I am a Full Stack Developer thats been hard at work for a little over 5 years now and loving every minute of it. Development and Programming are passions of mine and I find the work very rewarding and look forward to solving problems and helping businesses obtain new tools and solutions that help them succeed. I take my work very seriously, but also try and have fun with it where possible. I have worked in both solo and team
            settings and know how to contribute in both areas to help deliver an effective product. As with the nature of the profession I am always learning new technologies to help grow and enhance my skill set. If I don&apos;t know it I learn it, and I never shy away from a challange. If you are here, your probably interested in learning how I can help you or your team with your next project so please look around my site and see if any of my skill sets might meet your needs. I look forward to
            helping you where I can. Thanks you for your time and have fun browsing!
          </Typography>
        </Box>
      </Box>
      <Box className='knowlege-container' id='skills'>
        <Box style={{ display: 'flex' }}>
          {skillsData.map((skill, index: number) => {
            return (
              <Box key={skill.id}>
                <a href={skill.link}>
                  <Typography>
                    {skill.skill}&nbsp;{index !== skillsData.length - 1 && <span>|</span>}&nbsp;
                  </Typography>
                </a>
              </Box>
            )
          })}
        </Box>
      </Box>
      <SkillsContainter>
        <Box id='react' style={{ height: 800, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box>
            <a href='#skills'>Back Up &#x2191;</a>
          </Box>
          <Typography variant='h3'>React</Typography>
        </Box>
        <Box id='angular' style={{ height: 800 }}>
          <Box>
            <a href='#skills'>Back Up &#x2191;</a>
          </Box>
          <Typography variant='h3'>Angular</Typography>
        </Box>
        <Box id='javascript' style={{ height: 800 }}>
          <Box>
            <a href='#skills'>Back Up &#x2191;</a>
          </Box>
          <Typography variant='h3'>Javascript</Typography>
        </Box>
        <Box id='typescript' style={{ height: 800 }}>
          <Box>
            <a href='#skills'>Back Up &#x2191;</a>
          </Box>
          <Typography variant='h3'>Typescript</Typography>
        </Box>
      </SkillsContainter>
    </Layout>
  )
}

const Blink = styled.span`
  transition: all 1s ease-in-out;
  animation-name: blink;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`
