const Modal = ({
	isShow,
	children,
	className,
	modalSize = 'w-[100vw] md:w-[100vw] h-[100vh] -ml-[50vw] -mt-[50vh]',
	closeModal = () => {},
}) => {
	return (
		<div
			className={`fixed z-40 h-screen w-screen transition-opacity duration-200 ease-in-out  ${
				isShow ? '!visible block !opacity-100' : '!invisible !hidden !opacity-0'
			}`}
		>
			<div
				className={`fixed ${modalSize}  left-1/2 top-1/2 z-50 bg-black bg-opacity-50 ${className}`}
			>
				<div
					className={`fixed cursor-pointer ${modalSize} left-1/2 top-1/2`}
					onClick={closeModal}
				/>
				{children}
			</div>
		</div>
	);
};

export default Modal;
