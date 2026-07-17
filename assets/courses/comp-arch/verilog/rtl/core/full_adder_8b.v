module full_adder_8b (
	input wire [7:0] in1,
	input wire [7:0] in2,
	output wire [7:0] out,
	output wire carry_out,
	output wire overflow
);

	wire _cout1, _cout2, _cout3, _cout4, _cout5, _cout6, _cout7;

	full_adder fa1(.in1(in1[0]), .in2(in2[0]), .carry_in(1'b0), 
					.sum(out[0]), .carry_out(_cout1)
	);
	full_adder fa2(.in1(in1[1]), .in2(in2[1]), .carry_in(_cout1), 
					.sum(out[1]), .carry_out(_cout2)
	);
	full_adder fa3(.in1(in1[2]), .in2(in2[2]), .carry_in(_cout2), 
					.sum(out[2]), .carry_out(_cout3)
	);
	full_adder fa4(.in1(in1[3]), .in2(in2[3]), .carry_in(_cout3), 
					.sum(out[3]), .carry_out(_cout4)
	);

	full_adder fa5(.in1(in1[4]), .in2(in2[4]), .carry_in(_cout4), 
					.sum(out[4]), .carry_out(_cout5)
	);
	full_adder fa6(.in1(in1[5]), .in2(in2[5]), .carry_in(_cout5), 
					.sum(out[5]), .carry_out(_cout6)
	);
	full_adder fa7(.in1(in1[6]), .in2(in2[6]), .carry_in(_cout6), 
					.sum(out[6]), .carry_out(_cout7)
	);
	full_adder fa8(.in1(in1[7]), .in2(in2[7]), .carry_in(_cout7), 
					.sum(out[7]), .carry_out(carry_out)
	);

	xor(overflow, carry_out, _cout7);
endmodule
