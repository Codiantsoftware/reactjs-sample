import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import Auth from "../../components/layouts/auth";
import SignUpForm from "../../components/forms/sign-up";
import useAxios from "../../hooks/useAxios";
import { useTranslation } from "react-i18next";

export default function Register() {
	const { post } = useAxios();
	const { t } = useTranslation()

	async function onSubmit(data) {
		try {
			const res = await post('/signup', data);
			console.log("Response", res);
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<Auth>
			<Card className="xl:w-1/2 2xl:w-1/4 md:w-1/2 sm:w-1/2 w-5/6">
				<CardHeader>
					<CardTitle>{t("Sign Up")}</CardTitle>
				</CardHeader>
				<CardContent>
					<SignUpForm onSubmit={onSubmit} />
				</CardContent>
			</Card>
		</Auth>
	)
}