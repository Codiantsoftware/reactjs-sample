import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./validation";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

export default function LoginForm({ onSubmit }) {
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			deviceType: "web"
		}
	});

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="shadow-md rounded px-8 pt-6 pb-8 mb-2">
				<Input className="mb-4" type="email" name="emailOrMobile" label="Email" placeholder="Email" {...register("emailOrMobile")} />
				<Input className="mb-4" type="password" name="password" label="Password" placeholder="Pssword" {...register("password")} />
				<Button className="w-full mt-4" type="submit">Login</Button>
				<p className="text-center w-full mt-3">Don't have an account ? <Link className="text-primary" to="/register"><span className="text-accent ml-1">Sign Up</span></Link></p>
			</form>
		</>
	)
}