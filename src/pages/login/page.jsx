import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import Auth from "../../components/layouts/auth";
import LoginForm from "../../components/forms/login";
import useAxios from "../../hooks/useAxios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login() {

	const { post } = useAxios();
	const navigate = useNavigate();
	const { t } = useTranslation();

	async function onLogin(data) {
		try {
			const res = await post('/login', data);
			if (res?.data?.data?.token) {
				Cookies.set('token', res?.data?.data?.token, { expires: 7 });
				navigate('/admin/dashboard');
			};
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<Auth>
			<Card className="xl:w-1/2 2xl:w-1/4 md:w-1/2 sm:w-1/2 w-5/6">
				<CardHeader>
					<CardTitle>{t("Sign In")}</CardTitle>
				</CardHeader>
				<CardContent>
					<LoginForm onSubmit={onLogin} />
				</CardContent>
			</Card>
		</Auth>
	)
}