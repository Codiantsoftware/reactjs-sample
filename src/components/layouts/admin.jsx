import Cookies from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BsArrowLeftCircle } from 'react-icons/bs'
import Logo from '../../assets/react.svg'
import { Link } from "react-router-dom";
import HamburgerButton from "../ui/hamburger";
import { Menus } from "../../constant/menu";

export default function Admin() {
	const token = Cookies.get('token');
	const navigator = useNavigate();
	const [open, setOpen] = useState(true)
	const [mobileMenu, setMobileMenu] = useState(false)
	const location = useLocation()

	useEffect(() => {
		if (!token) {
			navigator('/login');
		}
	}, [])

	if (!token) {
		return (
			<div>
				Loading...
			</div>
		)
	}

	return (
		<div className="flex">
			<div
				className={`${open ? 'w-60' : 'w-fit'
					} hidden sm:block relative h-screen duration-300 border-r p-5`}
			>
				<BsArrowLeftCircle
					className={`${!open && 'rotate-180'
						} absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
					onClick={() => setOpen(!open)}
				/>
				<Link to='/'>
					<div className={`flex ${open && 'gap-x-4'} items-center`}>
						<img src={Logo} alt='' className='pl-2' />
						{open && (
							<span className='text-xl font-medium whitespace-nowrap dark:text-white'>
								React
							</span>
						)}
					</div>
				</Link>

				<ul className='pt-6'>
					{Menus.map((menu, index) => {
						if (menu?.execute) {
							return <LogoutBtn menu={menu} onClick={menu.execute} key={index} />
						}
						return <SideBarBtn menu={menu} key={index} />
					}
					)}
				</ul>
			</div>
			<div className="pt-3">
				<HamburgerButton
					setMobileMenu={setMobileMenu}
					mobileMenu={mobileMenu}
				/>
			</div>
			<div className="sm:hidden">
				<div
					className={`${mobileMenu ? 'flex' : 'hidden'
						} absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
				>
					{Menus.map((menu, index) => (
						<Link
							to={menu.path}
							key={index}
							onClick={() => setMobileMenu(false)}
						>
							<span
								className={` ${location.pathname === menu.path &&
									'bg-gray-200 dark:bg-gray-700'
									} p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
							>
								{menu.title}
							</span>
						</Link>
					))}
				</div>
			</div>
			<div className="content py-14 px-16">
				<Outlet />
			</div>
		</div>
	)
}

function LogoutBtn({ onClick, menu }) {
	return <div className="flex items-center my-3 gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" onClick={onClick}>
		{menu.title}
	</div>
}

function SideBarBtn({ menu }) {
	return <Link to={menu.path}>
		<li
			className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${location.pathname === menu.path &&
				'bg-gray-200 dark:bg-gray-700'
				}`}
		>
			{/* <span className='text-2xl'>{menu.src}</span> */}
			<span
				className={`${!open && 'hidden'
					} origin-left duration-300 hover:block`}
			>
				{menu.title}
			</span>
		</li>
	</Link>
}