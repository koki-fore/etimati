import axios from "axios"

import { Box, Button, Flex, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon,  } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import { useLayoutEffect, useState } from "react"


const Challenges = () => {

    const [challenges, setChallenges] = useState()

    
    
    useLayoutEffect(() => {
        axios.get('http://localhost:8080/challenges/')
        .then((res) => {
            console.log(res.data)
            setChallenges(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    if (!challenges) return null

    return (
        <Accordion allowToggle>
            {challenges?.map((challenge) => (
                <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <CheckIcon color='orange'/>
                        {challenge.title}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                {challenge.text}
                </AccordionPanel>
            </AccordionItem>
            ))}
            
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                <CheckIcon color='orange'/>
                チャレンジタイトル
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            チャレンジに関する説明
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
    )
}
export default Challenges;