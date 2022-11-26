import axios from "axios"
import theme from '../theme';
import { Box, Button, Flex, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, HStack, Tabs, TabList, Tab, TabPanels, TabPanel,  } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import { useLayoutEffect, useState } from "react"
import { useAuthContext } from '../contexts/AuthContext';

const Challenges = () => {
    const { userData } = useAuthContext();

    const [usersMe, setUsersMe] = useState()
    const [challenges, setChallenges] = useState()

    
    
    useLayoutEffect(() => {
        setUsersMe(userData)

        axios.get('http://localhost:8080/challenges/')
        .then((res) => {
            console.log(res.data)
            setChallenges(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    if (!challenges || !userData) return null

    return (
        <Tabs isFitted variant='enclosed'>
            <TabList>
                <Tab>すべて</Tab>
                <Tab>達成前</Tab>
                <Tab>達成済</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Accordion allowToggle>
                        {challenges?.map((challenge) => (
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box w='20px'>
                                        <CheckIcon color={theme.colors.main}/>
                                    </Box>
                                    <Box flex='1' textAlign='left'>
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
                    </Accordion>
                </TabPanel>
                <TabPanel>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box w='20px'>
                                        <CheckIcon color={theme.colors.main}/>
                                    </Box>
                                    <Box flex='1' textAlign='left'>
                                        水を3日分準備する(人数分)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                1人1日3リットルが目安です。大規模災害のときには1週間分必要になるので多めに準備しておきましょう。
                            </AccordionPanel>
                        </AccordionItem>
                            
                    </Accordion>
                </TabPanel>
                <TabPanel>
                    <Accordion allowToggle>
                        
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box w='20px'>
                                        <CheckIcon color={theme.colors.main}/>
                                    </Box>
                                    <Box flex='1' textAlign='left'>
                                        スリッパを履くようにする
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            災害が発生すると、割れた窓ガラスが部屋の中に散乱したり、土砂などが入り込んでしまったりすることがあります。そういった状況を素足や靴下などで歩くのは危険です。防災スリッパという頑丈で足元を守ってくれる商品もありますので是非一度ご覧ください。
                            </AccordionPanel>
                        </AccordionItem>
                        
                    </Accordion>
                </TabPanel>
            </TabPanels>
        </Tabs>
        
    )
}
export default Challenges;