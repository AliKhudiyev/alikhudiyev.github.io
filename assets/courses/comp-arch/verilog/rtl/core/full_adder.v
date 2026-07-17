module full_adder (
	input wire in1,
	input wire in2,
	input wire carry_in,
	output wire sum,
	output wire carry_out
);

	wire sum_in1_in2;
	wire carry_in1_in2;

	xor(sum_in1_in2, in1, in2);
	xor(sum, sum_in1_in2, carry_in);

	and(carry_in1_in2, in1, in2);
	and(_carry, sum_in1_in2, carry_in1_in2);
	or(carry_out, carry_in1_in2, _carry);
endmodule
