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
			username: "",
		}
	});

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="shadow-md rounded px-8 pt-6 pb-8 mb-2">
				<Input errors={errors} className="mb-4" name="firstName" label="First Name" placeholder="First Name" {...register("firstName")} />
				<Input errors={errors} className="mb-4" name="lastName" label="Last Name" placeholder="Last Name" {...register("lastName")} />
				<Input errors={errors} className="mb-4" type="email" name="email" label="Email" placeholder="Email" {...register("email")} />
				<Input errors={errors} className="mb-4" name="phoneNumber" label="Phone Number" placeholder="Phone Number" {...register("phoneNumber")} />
				<Input errors={errors} className="mb-4" type="password" name="password" label="Password" placeholder="Password" {...register("password")} />
				<Input errors={errors} className="mb-4" type="password" name="confirmPassword" label="Confirm Password" placeholder="Confirm Pssword" {...register("confirmPassword")} />
				<Button type="submit" className="w-full mt-4">Create Account</Button>
				<p className="text-center w-full mt-3">Already have an account ? <Link className="text-primary" to="/login"><span className="text-accent ml-1">Login</span></Link></p>
				<p></p>
			</form>
		</>
	)
}