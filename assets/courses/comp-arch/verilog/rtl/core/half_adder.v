module half_adder (
	input wire in1,
	input wire in2,
	output wire sum,
	output wire carry
);

	xor(sum, in1, in2);
	and(carry, in1, in2);
endmodule
