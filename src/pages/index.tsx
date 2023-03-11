/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styled from 'styled-components'
import Layout from '@/components/Layout'
import Pill from '@/components/Pill'
import { Button, Box, Typography, styled as MuiStyled } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

type TSkillData = {
  id: number
  skill: string
  link: string
  linkColor: string
}

const skillsData: TSkillData[] = [
  // { id: 3, skill: 'Javscript', link: '#javascript', linkColor: '#fcdc00 ' },
  // { id: 4, skill: 'Typescript', link: '#typescript', linkColor: '#3178c6 ' },
  { id: 1, skill: 'React', link: '#react', linkColor: '#61dafb' },
  { id: 2, skill: 'Angular', link: '#angular', linkColor: '#dd0031' },
]

const allSkills: string[] = ['React', 'Next.js', 'Angular', 'Redux', 'RxJS', 'C#', 'Styled Components', 'Bootstrap', 'Material UI', 'Apollo', 'React Router', 'Translation Packages', 'LogRocket', 'NX', 'WordPress', 'Node.js', 'Express.js', 'Knex.js', 'Winston', 'Dotnet', 'Entity Framework', 'Azure App Insights', 'MSSQL', 'Postgres', 'MongoDB']

export default function Home() {
  return (
    <Layout title='Joe Luna Dev'>
      <Box style={{ position: 'relative', width: '100vw', borderBottom: '10px solid #000' }}>
        <Box sx={{ position: 'absolute', zIndex: '555', fontWeight: 700, color: '#fff', top: '30%', left: 'calc(100vw - 98vw)', padding: 0, textAlign: 'left', '@media(max-width: 780px)': { textAlign: 'center' } }}>
          <Typography variant='h1'>
            Joseph Luna Portfolio<Blink>|</Blink>
          </Typography>
          <Typography variant='h3' sx={{ marginTop: '2%', color: 'var(--tertiary-color)' }}>
            Full Stack Developer
          </Typography>
        </Box>
        <Box style={{ position: 'relative', width: '100vw', height: '80vh' }}>
          <Image alt='Joe Luna Hero' fill src='https://res.cloudinary.com/dbqzzps1w/image/upload/v1676857513/portfolio/homepage/port_hero_image.jpg' style={{ filter: 'blur(6px) grayscale(5%)' }} />
        </Box>
      </Box>
      <Box sx={{ width: '100%', maxWidth: `var(--max-width)`, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3% 3%' }}>
        <Button variant='contained' color='appPrimary' style={{ width: '375px', height: '60px', background: 'linear-gradient(135deg, rgba(29,28,33,1) 59%, rgba(56,216,214,1) 200%)' }}>
          CONTACT ME
        </Button>
      </Box>
      <MainContentWrapper>
        <Box className='about-me-container'>
          <Typography variant='h3'>A Bit About Me</Typography>
          <Box className='about-me-content'>
            <Box className='profile-img-container'>
              <Image className='profile-img-one' src={require('../assets/images/my-images/joe_one.jpg')} alt={'Joseph Luna profile photo one'} />
            </Box>
            <Box className='profile-txt-container'>
              <Typography variant='body1'>
                Hi, my name is Joseph Luna, but please call me Joe! I am a Full Stack Developer that has been hard at work for a little over 5 years now and loving every minute of it. Development and Programming are passions of mine and I find the work very rewarding and look forward to solving problems and helping businesses obtain new tools and solutions that help them succeed. I take my work very seriously, but also try and have fun with it where possible. I have worked in both solo and team
                settings and know how to contribute in both areas to help deliver an effective product. As with the nature of the profession I am always learning new technologies to help grow and enhance my skill set. If I don&apos;t know it I learn it, and I never shy away from a challange. If you are here, your probably interested in learning how I can help you or your team with your next project so please look around my site and see if any of my skill sets might meet your needs. I look
                forward to helping you where I can. Thanks you for your time and have fun browsing!
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className='my-skills-container'>
          <Typography variant='h3'>Tech I Know</Typography>
          <Box className='my-skills-wrapper'>
            {allSkills.map((skill, index: number) => {
              return <Pill key={index} title={skill} />
            })}
          </Box>
        </Box>
        <Box className='skills-link-container' id='skills'>
          <Box className='skills-link-wrapper'>
            {skillsData.map((skill, index: number) => {
              return (
                <Box key={skill.id}>
                  <a href={skill.link}>
                    <Typography style={{ color: skill.linkColor, fontSize: '40px' }}>
                      {skill.skill}&nbsp;{index !== skillsData.length - 1 && <span>|</span>}&nbsp;
                    </Typography>
                  </a>
                </Box>
              )
            })}
          </Box>
        </Box>

        <Box className='skills-project-container'>
          <Box className='project-container' id='react'>
            <Box className='project-header-bar'>
              <Box>
                <a href='#skills'>
                  <DoubleArrowIcon className='chevron-up-icon' />
                </a>
              </Box>
              <Typography variant='h3'>React</Typography>
            </Box>

            <Box className='project-content-wrapper'>
              <Box className='project-text-content'>
                <Typography variant='h3'>
                  Just <i>React!</i>
                </Typography>
                <Typography variant='body1'>
                  React is my go to when it comes to creating new projects or just creating proof of concepts both personally and professionally. I truely enjoy the simplicity the library offers, and how fast it allows development to scale. I feel most confortable architecthing and developing with in the React ecosystem. I have extensive experince with using Redux for application state as well as amy more packages and third part libraries. Here are just a few of many projects I create that are
                  using React. Oh By the the way this portfolio site is using Nextjs!
                </Typography>
                <Box style={{ marginTop: '15px' }}>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header' style={{ backgroundColor: '#2c2c2c' }}>
                      <Typography>Check Payments</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#2c2c2c' }}>
                      <Typography variant='body1'>
                        <a href='https://paymentsoncheck.com/contribution/alex/8675b3fb-a0ce-492b-98b0-815f42f1f5a3' target='_blank' className='project-links-txt' rel='noreferrer'>
                          Check Payments
                        </a>
                        &nbsp;-&nbsp;This is a business project that I&apos;m partners in. For this application in our platform we have created a way for users to process payment using Stripe as out underlying payment processor. The goal to to accept payments for any of out user&apos;s needs, but this is a key area of infustructure to our overall goal.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header' style={{ backgroundColor: '#2c2c2c' }}>
                      <Typography>Power Todos</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#2c2c2c' }}>
                      <Typography variant='body1'>
                        <a href='https://www.powertodo.net' target='_blank' className='project-links-txt' rel='noreferrer'>
                          Power Todos
                        </a>{' '}
                        - This is peronal project that is a work in progress. Ultimately, this goal of this application is to allow a user to create todos and allow them gain more insight on thier day to day.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header' style={{ backgroundColor: '#2c2c2c' }}>
                      <Typography> REVO Healthcare</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#2c2c2c' }}>
                      <Typography variant='body1'>
                        <a href='https://revohealthcare.netlify.app/' target='_blank' className='project-links-txt' rel='noreferrer'>
                          REVO Healthcare
                        </a>
                        &nbsp;-&nbsp; This was a school project
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
              <Box className='project-img-wrapper'>
                <img className='project-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='react icon' />
              </Box>
            </Box>
          </Box>

          <Box className='project-container' id='angular'>
            <Box className='project-header-bar'>
              <Box>
                <a href='#skills'>
                  <DoubleArrowIcon className='chevron-up-icon' />
                </a>
              </Box>
              <Typography variant='h3'>Angular</Typography>
            </Box>

            <Box className='project-content-wrapper'>
              <Box className='project-img-wrapper'>
                <img className='project-img' src='https://angular.io/assets/images/logos/angular/angular.svg' alt='react icon' />
              </Box>

              <Box className='project-text-content'>
                <Typography variant='h3'>
                  Get <i>Angular!</i>
                </Typography>
                <Typography variant='body1'>I&apos;m totaly Angular 🤙! Pretty much all of my experince with Angular has been on projects that I unfortuanltey cannot share, but I plan on making some demo applications for my portfolio so stay tuned for that. My experince ranges from enrollment applications, administration panel, and ecommerce cart to name a few. I really enjoy working in Angualar when I get the chance to so if you have a project I can help with bring it on!</Typography>
                <Box style={{ marginTop: '15px' }}>
                  {/* <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header' style={{ backgroundColor: '#2c2c2c' }}>
                      <Typography>Check Payments</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#2c2c2c' }}>
                      <Typography variant='body1'>
                        <a href='https://paymentsoncheck.com/contribution/alex/8675b3fb-a0ce-492b-98b0-815f42f1f5a3' target='_blank' style={{ color: '#3178c6' }} rel='noreferrer'>
                          Check Payments
                        </a>
                        &nbsp;-&nbsp;This is a business project that I&apos;m partners in. For this application in our platform we have created a way for users to process payment using Stripe as out underlying payment processor. The goal to to accept payments for any of out user&apos;s needs, but this is a key area of infustructure to our overall goal.
                      </Typography>
                    </AccordionDetails>
                  </Accordion> */}
                </Box>
              </Box>
            </Box>
          </Box>
          {/* <Box className='project-container' id='javascript' style={{}}>
            <Box>
              <a href='#skills'>Back Up &#x2191;</a>
            </Box>
            <Typography variant='h3'>Javascript</Typography>
          </Box>
          <Box className='project-container' id='typescript' style={{}}>
            <Box>
              <a href='#skills'>Back Up &#x2191;</a>
            </Box>
            <Typography variant='h3'>Typescript</Typography>
          </Box> */}
        </Box>
      </MainContentWrapper>
    </Layout>
  )
}

const MainContentWrapper = styled(Box)`
  background: linear-gradient(135deg, rgba(29, 28, 33, 1) 59%, rgba(56, 216, 214, 1) 200%);
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.3);
  margin: 1% 0;

  .about-me-container {
    width: 90%;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    padding: 2%;
    @media (max-width: 780px) {
      text-align: center;
    }

    .about-me-content {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 2%;

      .profile-img-container {
        width: 40%;
        @media (max-width: 780px) {
          width: 100%;
        }
        .profile-img-one {
          height: 60%;
          width: 80%;
        }
      }

      .profile-txt-container {
        width: 60%;
        @media (max-width: 780px) {
          width: 100%;
        }
      }
    }
  }

  .my-skills-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 1%;
    padding: 2%;

    .my-skills-wrapper {
      display: flex;
      flex-flow: row wrap;
      width: 90%;
      padding: 2%;
      border: 2px solid #fff;
      border-radius: 8px;
      @media (max-width: 594px) {
        width: 100%;
      }
    }
  }

  .skills-link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding: 3%;

    .skills-link-wrapper {
      display: flex;
      flex-flow: row wrap;
      padding: 3%;
    }
  }

  .skills-project-container {
    padding: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50;
    width: 90%;

    .project-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .project-header-bar {
        width: 100%;
        padding: 1%;
        background-color: #2c2c2c;
        border-radius: 5px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .chevron-up-icon {
          transform: rotate(-90deg);
          font-size: 40px;
        }
      }

      .project-content-wrapper {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 2%;

        .project-text-content {
          width: 50%;
          padding: 1%;

          .project-links-txt {
            color: #3178c6;
            font-size: 26px;
          }
        }
        .project-img-wrapper {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .project-img {
            width: 300px;
          }
        }
      }
    }
  }
`

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
