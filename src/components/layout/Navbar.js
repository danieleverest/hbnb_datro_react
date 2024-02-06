import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Tooltip,
    Button
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    return (
        <ul className="bg-transparent my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-medium"
            >
                {/* <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Pages
                </a> */}
                <a style={{ fontWeight: "light", color: "#ed1c24" }} href="https://datro.xyz" target="_blank" rel="noreferrer">
                    <img src="./img/datro_logo.png" alt='Img'
                        style={{
                            maxWidth: "85px",
                            filter: "brightness(0.4)"
                        }} />
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="https://github.com/unclehowell/datro/" target="_blank" rel="noreferrer">
                    <Tooltip content="GitHub" placement="bottom">
                            <Button size="sm" color="gray" className="flex items-center gap-3">
                                <i className="fab fa-github text-lg" />
                                GitHub
                            </Button>

                    </Tooltip>
                </a>
            </Typography>
        </ul>
    );
}

export default function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className="relative z-50 w-full bg-gray-900" style={{backgroundClip: "#121212"}}>
            <Navbar className="mx-auto px-6 py-3 border-none rounded-none bg-gray-900 w-full max-w-full">
                <div className="flex items-center justify-between max-w-full">
                    <img
                        src="/img/logo.png"
                        alt="Logo"
                        id="logo"
                    />
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </Navbar>
        </div>
    );
}