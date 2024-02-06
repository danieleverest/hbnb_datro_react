import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Accordion,
    AccordionBody,
    ListItem,
    List
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

export default function SidebarWithLogo() {


    const [open1, setOpen1] = React.useState(0);

    const handleOpen1 = (value) => setOpen1(open1 === value ? 0 : value);


    return (
        <>
            <div className="relative lg:flex bg-gray-300 h-[calc(100vh-96px)]">
                <Card className="lg:w-1/2 md:w-3/4 sm:w-full sidebar-left h-[calc(100vh)] -top-40 left-0 z-10 rounded-br-6xl text-white/10 lg:-inset-y-24 shadow-none">
                    <Card className="w-full sidebar-left text white pt-16">
                        <div className="mt-8 lg:mr-32 md:mr-32">
                            <CardBody className="flex flex-col gap-4 text-white shadow-none">
                                <Typography variant="small" className="font-normal text-white opacity-80">
                                    <Typography variant="paragraph" className="text-justify">
                                        Today there's more than <strong>1 Billion</strong> wireless routers on our planet. Our <strong>free firmware</strong> gives these devices a built-in app store. Featuring all the latest apps, including IoT, A.I and Blockchain. <strong>50+ Million</strong> existing devices already qualify for this <span className="hide-inline"></span>&nbsp;
                                        <Accordion open={open1 === 1} animate={CUSTOM_ANIMATION} className="inline">
                                            <u onClick={() => handleOpen1(1)} className="text-red-400 cursor-pointer">Free Upgrade</u>
                                            <AccordionBody className="text-white">
                                                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                                                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                                                ourselves and actualize our dreams.
                                                <Card className="w-full my-3 text-white bg-white">
                                                    <List>
                                                        <ListItem>-works on 100M+ devices. 1M+ users by 2025</ListItem>
                                                        <ListItem>-signed patent purchase agreement with Google</ListItem>
                                                        <ListItem>-full anonymity, free, open, decentral & autonomous</ListItem>
                                                    </List>
                                                </Card>

                                                <Typography variant="paragraph" className="text-justify">Hotspotβnβ makes exploring and installing applications on your wireless router the same experience as on handheld mobile devices. This gives your entire home or businesses occupants instant access to the latest technological advances and developments in privacy, security, control and entertainment. </Typography>

                                                <Typography variant="paragraph" className="text-justify">Join us on our journey. Get the latest <u>
                                                    <a href="https://github.com/unclehowell/datro/releases/" target="_blank" style={{ color: "#ed1c24" }} rel="noreferrer">FREE Firmware Upgrade</a></u> </Typography>
                                            </AccordionBody>
                                        </Accordion>
                                    </Typography>
                                    <Typography variant="paragraph" className="text-justify">Regards, </Typography>
                                    <img id="signature" alt="Sion Buckler" title="Sion Buckler" className="ml-4 w-3/4" src="./img/signature2.png" />
                                </Typography>
                            </CardBody>
                        </div>
                    </Card>

                    <div style={{ top: "25%" }} className="lg:absolute md:absolute lg:-right-40 md:-right-40 z-10 mx-auto flex lg:w-64 md:w-72 sm:w-96 rounded-xl shadow-xl">
                        <Card className="mt-6 bg-white" color="gray">
                            <CardHeader color="blue-gray" className="flex items-center bg-white relative h-56">
                                <img
                                    src="/img/black0.png"
                                    alt="Img"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="gray" className="mb-1 slogan">
                                    "Locally Host Apps"
                                </Typography><br />

                            </CardBody>
                            <CardFooter className="pt-0">
                                <div className="flex w-max gap-4 m-auto">
                                    <a href="https://gui.datro.xyz/" className="inline-flex items-center justify-center p-3 text-base font-medium text-blue-500 rounded-lg bg-blue-100 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span className="w-full">Demo</span>
                                        <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                    <a href="https://wayback.datro.xyz/2020-08-01_hbnb-intro.webm" className="inline-flex items-center justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <svg aria-hidden="true" className="w-5 h-5 me-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83" /><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF" /><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E" /><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262" /><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE" /></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)" /></clipPath></defs></svg>
                                        <span className="w-full">Video</span>
                                        <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>

                </Card>


                <div className="lg:w-1/4 md:w-1/4"></div>

                <div className="grid gap-4 p-5 lg:w-1/2 md:1/4 sm:w-full -top-20">
                    <Card className="w-96 w-full bg-transparent shadow-none" color="gray">
                        <CardBody className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                                <div className="grid gap-4">
                                    <div>
                                        <img
                                            className="h-auto max-w-full rounded-lg object-cover object-center"
                                            src="./img/green1.png"
                                            alt="gallery"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="h-auto max-w-full rounded-lg object-cover object-center "
                                            src="./img/pink.png"
                                            alt="gallery"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="h-auto max-w-full rounded-lg object-cover object-center"
                                            src="./img/red.png"
                                            alt="gallery"
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4">
                                    <div>
                                        <img
                                            className="h-auto max-w-full rounded-lg object-cover object-center"
                                            src="./img/green.png"
                                            alt="gallery"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="h-auto max-w-full rounded-lg object-cover object-center"
                                            src="./img/black.png"
                                            alt="gallery"
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4 portimg hidden">
                                    <div>
                                        <img
                                            className="h-auto max-w-full rounded-lg object-cover object-center"
                                            src="./img/port1.png"
                                            alt="gallery"
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4 portimg hidden">
                                    <div>
                                        <img
                                            className="h-auto max-w-full rounded-lg object-cover object-center"
                                            src="./img/port2.png"
                                            alt="gallery"
                                        />
                                    </div>
                                </div>
                            </div>

                        </CardBody>
                    </Card>
                </div>

            </div>
        </>
    );
}