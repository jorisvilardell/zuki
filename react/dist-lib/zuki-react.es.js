import e from "react";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/lib/Zuki.jsx
var i = {
	orange: {
		shell: "#F2552C",
		body: "#E24921",
		belly: "#FF8E63",
		helmet: "#FFC53D",
		ink: "#2B2B33",
		light: "#FFFFFF"
	},
	blue: {
		shell: "#4F6EF7",
		body: "#3A59E0",
		belly: "#86A0FB",
		helmet: "#FFC53D",
		ink: "#2B2B33",
		light: "#FFFFFF"
	}
}, a = 260, o = {
	cx: 130,
	cy: 148,
	rx: 92,
	ry: 78
}, s = {
	lx: 101,
	rx: 159,
	cy: 126,
	r: 29
}, c = { r: 15 };
function l(e) {
	return Math.round(e * 10) / 10;
}
function u() {
	return {
		base: "M-18 -24 C8 -34 44 -30 60 -14 C66 -8 64 2 54 4 L10 3 C-2 5 -12 4 -20 -2 C-30 -10 -30 -18 -18 -24 Z",
		jaw: "M10 3 C26 5 44 12 50 20 C46 26 30 26 16 22 C8 19 6 10 10 3 Z"
	};
}
var d = ({ side: e, p: t, C: i }) => {
	let a = t.s == null ? 1 : t.s, o = !!t.flip, s = o ? -a : a, c = (o ? t.rot : t.rot + 180) * Math.PI / 180, d = t.cx + Math.cos(c) * 14 * a, f = t.cy + Math.sin(c) * 14 * a, p = u();
	return /* @__PURE__ */ r("g", {
		className: `zuk-claw zuk-claw-${e}`,
		children: [/* @__PURE__ */ n("line", {
			className: "zuk-arm",
			x1: l(t.ax),
			y1: l(t.ay),
			x2: l(d),
			y2: l(f),
			stroke: i.shell,
			strokeWidth: "24",
			strokeLinecap: "round"
		}), /* @__PURE__ */ n("g", {
			className: "zuk-claw-pos",
			transform: `translate(${l(t.cx)} ${l(t.cy)}) rotate(${l(t.rot)}) scale(${l(s)} ${a})`,
			children: /* @__PURE__ */ r("g", {
				className: "zuk-claw-tip",
				children: [
					t.holdSign && /* @__PURE__ */ r("g", {
						transform: "translate(0, 0)",
						children: [/* @__PURE__ */ n("rect", {
							x: "-10",
							y: "-6",
							width: "145",
							height: "12",
							fill: i.ink
						}), /* @__PURE__ */ r("g", {
							transform: "translate(135, 0) rotate(90) scale(2.2)",
							children: [
								/* @__PURE__ */ n("polygon", {
									points: "0,-36 25,-25 36,0 25,25 0,36 -25,25 -36,0 -25,-25",
									fill: "#E63946",
									stroke: i.ink,
									strokeWidth: "2.5",
									strokeLinejoin: "round"
								}),
								/* @__PURE__ */ n("polygon", {
									points: "0,-30 21,-21 30,0 21,21 0,30 -21,21 -30,0 -21,-21",
									fill: "none",
									stroke: "#FFFFFF",
									strokeWidth: "1.5",
									strokeLinejoin: "round"
								}),
								/* @__PURE__ */ n("text", {
									x: "0",
									y: "6",
									fontFamily: "'Arial Black', 'Impact', sans-serif",
									fontSize: "19",
									fontWeight: "900",
									fill: "#FFFFFF",
									textAnchor: "middle",
									letterSpacing: "0",
									children: t.signText || "STOP"
								})
							]
						})]
					}),
					/* @__PURE__ */ n("path", {
						className: "zuk-jaw",
						d: p.jaw,
						fill: i.shell,
						style: {
							transformBox: "fill-box",
							transformOrigin: "9% 0%"
						}
					}),
					/* @__PURE__ */ n("path", {
						className: "zuk-jaw-fixed",
						d: p.base,
						fill: i.shell
					})
				]
			})
		})]
	});
}, f = ({ C: e }) => /* @__PURE__ */ n("g", {
	className: "zuk-legs",
	children: [
		{
			x0: 92,
			x1: 84
		},
		{
			x0: 116,
			x1: 113
		},
		{
			x0: 144,
			x1: 147
		},
		{
			x0: 168,
			x1: 176
		}
	].map((t, r) => /* @__PURE__ */ n("line", {
		className: `zuk-leg zuk-leg-${r}`,
		x1: t.x0,
		y1: 206,
		x2: t.x1,
		y2: 232,
		stroke: e.shell,
		strokeWidth: 17,
		strokeLinecap: "round"
	}, r))
}), p = {
	none: () => null,
	helmet: ({ C: e }) => /* @__PURE__ */ r(t, { children: [
		/* @__PURE__ */ n("path", {
			d: "M55 83 A 75 68 0 0 1 205 83 Z",
			fill: e.helmet
		}),
		/* @__PURE__ */ n("path", {
			d: "M113 83 L113 16 Q130 8 147 16 L147 83 Z",
			fill: e.helmet
		}),
		/* @__PURE__ */ n("path", {
			d: "M113 83 L113 16 Q130 8 147 16 L147 83 Z",
			fill: "rgba(255,255,255,0.15)"
		}),
		/* @__PURE__ */ n("path", {
			d: "M113 83 L113 16",
			stroke: "rgba(0,0,0,0.1)",
			strokeWidth: "2.5",
			fill: "none"
		}),
		/* @__PURE__ */ n("path", {
			d: "M147 83 L147 16",
			stroke: "rgba(0,0,0,0.1)",
			strokeWidth: "2.5",
			fill: "none"
		}),
		/* @__PURE__ */ n("path", {
			d: "M80 83 Q80 50 92 38",
			stroke: "rgba(0,0,0,0.1)",
			strokeWidth: "2.5",
			fill: "none",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ n("path", {
			d: "M180 83 Q180 50 168 38",
			stroke: "rgba(0,0,0,0.1)",
			strokeWidth: "2.5",
			fill: "none",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ n("path", {
			d: "M42 93 Q130 83 218 93 A 7 7 0 0 0 218 79 Q130 69 42 79 A 7 7 0 0 0 42 93 Z",
			fill: e.helmet
		}),
		/* @__PURE__ */ n("path", {
			d: "M42 93 Q130 83 218 93 A 7 7 0 0 0 218 79 Q130 69 42 79 A 7 7 0 0 0 42 93 Z",
			fill: "rgba(0,0,0,0.15)"
		}),
		/* @__PURE__ */ n("path", {
			d: "M42 89 Q130 79 218 89 A 7 7 0 0 0 218 75 Q130 65 42 75 A 7 7 0 0 0 42 89 Z",
			fill: e.helmet
		})
	] }),
	cap: ({ C: e }) => /* @__PURE__ */ r(t, { children: [
		/* @__PURE__ */ n("path", {
			d: "M58 84 Q5 88 10 105 Q60 110 132 96 Z",
			fill: e.helmet
		}),
		/* @__PURE__ */ n("path", {
			d: "M10 105 Q15 111 65 112 Q125 102 132 96 Q60 110 10 105 Z",
			fill: "rgba(0,0,0,0.1)"
		}),
		/* @__PURE__ */ n("path", {
			d: "M58 84 A74 58 0 0 1 206 84 A 74 12 0 0 1 58 84 Z",
			fill: e.helmet
		}),
		/* @__PURE__ */ n("path", {
			d: "M132 26 Q132 55 132 96",
			stroke: "rgba(0,0,0,0.15)",
			strokeWidth: "2",
			fill: "none"
		}),
		/* @__PURE__ */ n("path", {
			d: "M132 26 Q90 45 70 88",
			stroke: "rgba(0,0,0,0.15)",
			strokeWidth: "2",
			fill: "none"
		}),
		/* @__PURE__ */ n("path", {
			d: "M132 26 Q174 45 194 88",
			stroke: "rgba(0,0,0,0.15)",
			strokeWidth: "2",
			fill: "none"
		}),
		/* @__PURE__ */ n("circle", {
			cx: "102",
			cy: "50",
			r: "2.5",
			fill: "rgba(0,0,0,0.15)"
		}),
		/* @__PURE__ */ n("circle", {
			cx: "162",
			cy: "50",
			r: "2.5",
			fill: "rgba(0,0,0,0.15)"
		}),
		/* @__PURE__ */ n("path", {
			d: "M58 84 A 74 12 0 0 0 206 84",
			stroke: "rgba(0,0,0,0.15)",
			strokeWidth: "3",
			fill: "none"
		}),
		/* @__PURE__ */ n("ellipse", {
			cx: "132",
			cy: "26",
			rx: "8",
			ry: "4",
			fill: e.helmet
		}),
		/* @__PURE__ */ n("path", {
			d: "M124 26 A 8 4 0 0 0 140 26",
			stroke: "rgba(0,0,0,0.15)",
			strokeWidth: "1.5",
			fill: "none"
		})
	] }),
	beanie: ({ C: e }) => /* @__PURE__ */ r(t, { children: [
		/* @__PURE__ */ n("path", {
			d: "M54 82 A76 60 0 0 1 206 82 Z",
			fill: e.helmet
		}),
		/* @__PURE__ */ n("rect", {
			x: "50",
			y: "76",
			width: "160",
			height: "18",
			rx: "9",
			fill: e.ink
		}),
		/* @__PURE__ */ n("circle", {
			cx: "130",
			cy: "20",
			r: "11",
			fill: e.ink
		})
	] }),
	headset: ({ C: e }) => /* @__PURE__ */ r(t, { children: [
		/* @__PURE__ */ n("path", {
			d: "M58 86 A78 70 0 0 1 202 86",
			stroke: e.ink,
			strokeWidth: "14",
			fill: "none",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ n("rect", {
			x: "42",
			y: "78",
			width: "28",
			height: "40",
			rx: "12",
			fill: e.ink
		}),
		/* @__PURE__ */ n("rect", {
			x: "190",
			y: "78",
			width: "28",
			height: "40",
			rx: "12",
			fill: e.ink
		}),
		/* @__PURE__ */ n("path", {
			d: "M204 116 Q214 150 176 162",
			stroke: e.ink,
			strokeWidth: "9",
			fill: "none",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ n("circle", {
			cx: "174",
			cy: "164",
			r: "9",
			fill: e.helmet
		})
	] }),
	party: ({ C: e }) => /* @__PURE__ */ r(t, { children: [
		/* @__PURE__ */ n("path", {
			d: "M130 6 L172 90 L88 90 Z",
			fill: e.helmet
		}),
		/* @__PURE__ */ n("path", {
			d: "M130 6 L150 46 L110 46 Z",
			fill: e.ink,
			opacity: "0.18"
		}),
		/* @__PURE__ */ n("circle", {
			cx: "130",
			cy: "8",
			r: "10",
			fill: e.ink
		})
	] })
}, m = ({ name: e, C: t }) => {
	let r = p[e] || p.helmet;
	return /* @__PURE__ */ n("g", {
		className: `zuk-casque zuk-acc-${e}`,
		children: /* @__PURE__ */ n(r, { C: t })
	});
}, h = ({ C: t, look: i = {
	dx: 0,
	dy: 4
} }) => {
	let a = (a) => {
		let o = a + i.dx, u = s.cy + i.dy;
		return /* @__PURE__ */ r(e.Fragment, { children: [
			/* @__PURE__ */ n("circle", {
				cx: a,
				cy: s.cy,
				r: s.r,
				fill: t.light
			}),
			/* @__PURE__ */ n("circle", {
				className: "zuk-pupil",
				cx: l(o),
				cy: l(u),
				r: c.r,
				fill: t.ink
			}),
			/* @__PURE__ */ n("circle", {
				className: "zuk-eye-glint",
				cx: l(o + 5),
				cy: l(u - 6),
				r: "5.5",
				fill: t.light
			})
		] }, a);
	};
	return /* @__PURE__ */ r("g", {
		className: "zuk-eyes",
		children: [a(s.lx), a(s.rx)]
	});
}, g = ({ C: e }) => {
	let t = (t) => /* @__PURE__ */ n("path", {
		d: `M${t - 20} ${s.cy} Q${t} ${s.cy + 20} ${t + 20} ${s.cy}`,
		stroke: e.ink,
		strokeWidth: "8",
		fill: "none",
		strokeLinecap: "round"
	}, t);
	return /* @__PURE__ */ r("g", {
		className: "zuk-eyes",
		children: [t(s.lx), t(s.rx)]
	});
}, _ = ({ C: e }) => {
	let t = (t) => /* @__PURE__ */ n("path", {
		d: `M${t - 19} ${s.cy + 6} Q${t} ${s.cy - 16} ${t + 19} ${s.cy + 6}`,
		stroke: e.ink,
		strokeWidth: "8",
		fill: "none",
		strokeLinecap: "round"
	}, t);
	return /* @__PURE__ */ r("g", {
		className: "zuk-eyes",
		children: [t(s.lx), t(s.rx)]
	});
}, v = ({ C: t, look: i = {
	dx: 0,
	dy: 2
} }) => {
	let a = (a) => {
		let o = a + i.dx, u = s.cy + i.dy;
		return /* @__PURE__ */ r(e.Fragment, { children: [
			/* @__PURE__ */ n("circle", {
				cx: a,
				cy: s.cy,
				r: s.r,
				fill: t.light
			}),
			/* @__PURE__ */ n("circle", {
				className: "zuk-pupil",
				cx: l(o),
				cy: l(u),
				r: c.r,
				fill: t.ink
			}),
			/* @__PURE__ */ n("circle", {
				className: "zuk-eye-glint",
				cx: l(o + 5),
				cy: l(u - 6),
				r: "6",
				fill: t.light
			}),
			/* @__PURE__ */ n("circle", {
				className: "zuk-eye-glint",
				cx: l(o - 5),
				cy: l(u + 5),
				r: "3",
				fill: t.light
			})
		] }, a);
	};
	return /* @__PURE__ */ r("g", {
		className: "zuk-eyes",
		children: [a(s.lx), a(s.rx)]
	});
}, y = {
	smile: "M108 164 Q130 186 152 164",
	neutral: "M112 172 L148 172",
	small: "M120 172 Q130 180 140 172",
	worried: "M112 174 Q130 166 148 174"
}, b = ({ C: e, d: t = y.smile }) => /* @__PURE__ */ n("path", {
	className: "zuk-mouth",
	d: t,
	stroke: e.ink,
	strokeWidth: "8",
	fill: "none",
	strokeLinecap: "round"
}), x = ({ C: e }) => /* @__PURE__ */ n("g", {
	className: "zuk-mouth",
	children: /* @__PURE__ */ n("path", {
		d: "M104 162 Q130 168 156 162 Q150 196 130 196 Q110 196 104 162 Z",
		fill: e.ink
	})
}), S = ({ C: e }) => /* @__PURE__ */ n("g", {
	className: "zuk-mouth zuk-mouth-snore",
	children: /* @__PURE__ */ n("ellipse", {
		cx: "130",
		cy: "172",
		rx: "6",
		ry: "6",
		fill: e.ink
	})
}), C = ({ C: e }) => /* @__PURE__ */ n("g", {
	className: "zuk-plastron",
	children: /* @__PURE__ */ n("ellipse", {
		cx: "130",
		cy: "170",
		rx: "55",
		ry: "49",
		fill: e.belly
	})
}), w = ({ C: e }) => /* @__PURE__ */ n("g", {
	className: "zuk-carapace",
	children: /* @__PURE__ */ n("ellipse", {
		cx: o.cx,
		cy: o.cy,
		rx: o.rx,
		ry: o.ry,
		fill: e.body
	})
}), T = {
	ax: 58,
	ay: 180,
	cx: 30,
	cy: 172,
	rot: 18,
	s: .6,
	flip: !0
}, E = {
	ax: 202,
	ay: 180,
	cx: 230,
	cy: 172,
	rot: 342,
	s: .6
};
function D(e, t, r, i, a) {
	let o = "";
	for (let n = 0; n < 10; n++) {
		let i = Math.PI / 5 * n - Math.PI / 2, a = n % 2 == 0 ? r : r * .45;
		o += `${l(e + a * Math.cos(i))},${l(t + a * Math.sin(i))} `;
	}
	return /* @__PURE__ */ n("polygon", {
		points: o.trim(),
		fill: i
	}, a);
}
function O(e, t, r, i) {
	let a = r * .62, o = r * .34, s = "";
	for (let n = 0; n < 16; n++) {
		let i = Math.PI / 8 * n, o = n % 2 == 0 ? r : a;
		s += (n === 0 ? "M" : "L") + l(e + o * Math.cos(i)) + " " + l(t + o * Math.sin(i)) + " ";
	}
	return s += "Z", s += ` M ${l(e - o)} ${l(t)} A ${l(o)} ${l(o)} 0 1 0 ${l(e + o)} ${l(t)} A ${l(o)} ${l(o)} 0 1 0 ${l(e - o)} ${l(t)} Z`, /* @__PURE__ */ n("path", {
		d: s,
		fill: i,
		fillRule: "evenodd"
	});
}
var k = ({ C: e }) => /* @__PURE__ */ r("g", {
	className: "zuk-props zuk-props-gears",
	children: [/* @__PURE__ */ n("g", {
		className: "zuk-gear-a",
		children: O(75, 48, 25, "currentColor")
	}), /* @__PURE__ */ n("g", {
		className: "zuk-gear-b",
		children: /* @__PURE__ */ n("g", {
			transform: "rotate(22.5 49 22)",
			children: O(49, 22, 20, e.helmet)
		})
	})]
}), A = ({ C: e, transform: t }) => /* @__PURE__ */ r("g", {
	className: "zuk-props zuk-props-doc",
	transform: t || "",
	children: [
		/* @__PURE__ */ n("rect", {
			x: "168",
			y: "140",
			width: "64",
			height: "80",
			rx: "6",
			fill: e.light,
			transform: "rotate(8 200 180)"
		}),
		/* @__PURE__ */ r("g", {
			transform: "rotate(8 200 180)",
			stroke: e.shell,
			strokeWidth: "5",
			strokeLinecap: "round",
			children: [
				/* @__PURE__ */ n("line", {
					x1: "178",
					y1: "158",
					x2: "222",
					y2: "158"
				}),
				/* @__PURE__ */ n("line", {
					x1: "178",
					y1: "172",
					x2: "222",
					y2: "172"
				}),
				/* @__PURE__ */ n("line", {
					x1: "178",
					y1: "186",
					x2: "210",
					y2: "186"
				})
			]
		}),
		/* @__PURE__ */ n("path", {
			d: "M180 202 l8 9 16 -18",
			transform: "rotate(8 200 180)",
			stroke: e.helmet,
			strokeWidth: "6",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	]
}), j = ({ C: e }) => /* @__PURE__ */ n("path", {
	className: "zuk-eyebrow",
	d: "M146 98 Q160 90 174 98",
	stroke: e.ink,
	strokeWidth: "7",
	fill: "none",
	strokeLinecap: "round"
}), M = ({ C: e }) => /* @__PURE__ */ n("g", {
	className: "zuk-props zuk-props-q",
	children: /* @__PURE__ */ n("text", {
		x: "206",
		y: "64",
		fontFamily: "system-ui, sans-serif",
		fontSize: "58",
		fontWeight: "800",
		fill: "currentColor",
		children: "?"
	})
}), N = ({ C: e }) => /* @__PURE__ */ r("g", {
	className: "zuk-props-burst",
	children: [
		/* @__PURE__ */ n("g", {
			className: "zuk-star-1",
			children: D(130, 29, 8, e.helmet, "s1")
		}),
		/* @__PURE__ */ n("g", {
			className: "zuk-star-2",
			children: D(175, 42, 10, e.helmet, "s2")
		}),
		/* @__PURE__ */ n("g", {
			className: "zuk-star-3",
			children: D(85, 43, 10, e.helmet, "s3")
		}),
		/* @__PURE__ */ n("g", {
			className: "zuk-star-4",
			children: D(100, 20, 5, e.helmet, "s4")
		}),
		/* @__PURE__ */ n("g", {
			className: "zuk-star-5",
			children: D(150, 28, 6, e.helmet, "s5")
		})
	]
}), P = ({ C: e }) => /* @__PURE__ */ r("g", {
	className: "zuk-props zuk-props-wrench",
	transform: "rotate(-32 196 150)",
	children: [/* @__PURE__ */ n("rect", {
		x: "188",
		y: "96",
		width: "16",
		height: "74",
		rx: "8",
		fill: e.ink
	}), /* @__PURE__ */ n("path", {
		d: "M178 96 a18 18 0 1 1 36 0 l-8 0 a10 10 0 1 0 -20 0 Z",
		fill: e.ink
	})]
}), F = ({ C: e }) => /* @__PURE__ */ r("g", {
	className: "zuk-props zuk-props-z",
	fontFamily: "system-ui, sans-serif",
	fontWeight: "800",
	fill: e.body,
	children: [
		/* @__PURE__ */ n("text", {
			className: "zuk-z-1",
			x: "188",
			y: "92",
			fontSize: "26",
			children: "Z"
		}),
		/* @__PURE__ */ n("text", {
			className: "zuk-z-2",
			x: "208",
			y: "66",
			fontSize: "34",
			children: "Z"
		}),
		/* @__PURE__ */ n("text", {
			className: "zuk-z-3",
			x: "226",
			y: "40",
			fontSize: "22",
			opacity: "0.6",
			children: "z"
		})
	]
}), I = ({ pose: e = "reference", theme: o = "orange", accessory: s = "none", mono: c = "", monoBg: l = "#FFFFFF", size: u = 260, className: p = "", title: D, stopText: O = "STOP", hideLimbs: I = !1, extra: L }) => {
	let R = !!c, z = R ? {
		shell: c,
		body: c,
		belly: c,
		helmet: c,
		ink: l,
		light: l
	} : i[o] || i.orange, B = { ...T }, V = { ...E }, H = /* @__PURE__ */ n(h, { C: z }), U = /* @__PURE__ */ n(b, { C: z }), W = null;
	switch (e) {
		case "idle": break;
		case "hello":
			B = { ...T }, H = /* @__PURE__ */ n(h, { C: z }), U = /* @__PURE__ */ n(b, {
				C: z,
				d: y.smile
			});
			break;
		case "process":
			H = /* @__PURE__ */ n(_, { C: z }), U = /* @__PURE__ */ n(b, {
				C: z,
				d: y.small
			}), W = /* @__PURE__ */ n(k, { C: z });
			break;
		case "quote":
			B = { ...T }, V = {
				ax: 202,
				ay: 180,
				cx: 200,
				cy: 140,
				rot: 100,
				s: .5
			}, W = /* @__PURE__ */ n(A, { C: z }), U = /* @__PURE__ */ n(b, { C: z });
			break;
		case "perplexed":
			B = {
				ax: 50,
				ay: 160,
				cx: 20,
				cy: 110,
				rot: 25,
				s: .6,
				flip: !0
			}, V = {
				ax: 210,
				ay: 160,
				cx: 240,
				cy: 110,
				rot: 335,
				s: .6
			}, H = /* @__PURE__ */ n(h, {
				C: z,
				look: {
					dx: 5,
					dy: -1
				}
			}), U = /* @__PURE__ */ n(b, {
				C: z,
				d: y.neutral
			}), W = /* @__PURE__ */ r(t, { children: [/* @__PURE__ */ n(j, { C: z }), /* @__PURE__ */ n(M, { C: z })] });
			break;
		case "success":
			B = {
				ax: 62,
				ay: 152,
				cx: 48,
				cy: 80,
				rot: 55,
				s: .56,
				flip: !0
			}, V = {
				ax: 198,
				ay: 152,
				cx: 212,
				cy: 80,
				rot: 305,
				s: .56
			}, H = /* @__PURE__ */ n(v, { C: z }), U = /* @__PURE__ */ n(x, { C: z }), W = /* @__PURE__ */ n(N, { C: z });
			break;
		case "travaille":
			V = {
				ax: 200,
				ay: 170,
				cx: 204,
				cy: 150,
				rot: 290,
				s: .52
			}, W = /* @__PURE__ */ n(P, { C: z }), U = /* @__PURE__ */ n(b, {
				C: z,
				d: y.small
			});
			break;
		case "endormi":
			B = {
				...T,
				rot: -2
			}, V = {
				...E,
				rot: 2
			}, H = /* @__PURE__ */ n(g, { C: z }), U = /* @__PURE__ */ n(S, { C: z }), W = /* @__PURE__ */ n(F, { C: z });
			break;
		case "stop":
			B = { ...T }, V = {
				ax: 200,
				ay: 160,
				cx: 230,
				cy: 120,
				rot: 270,
				s: .7,
				holdSign: !0,
				signText: O
			}, H = /* @__PURE__ */ n(_, { C: z }), U = /* @__PURE__ */ n(b, {
				C: z,
				d: y.neutral
			});
			break;
	}
	return /* @__PURE__ */ r("svg", {
		className: `zuk ${p}`.trim(),
		viewBox: `0 0 ${a} ${a}`,
		width: u,
		height: u,
		style: { overflow: "visible" },
		xmlns: "http://www.w3.org/2000/svg",
		"data-pose": e,
		children: [D && /* @__PURE__ */ n("title", { children: D }), /* @__PURE__ */ r("g", {
			className: "zuk-root",
			children: [
				!I && /* @__PURE__ */ n(f, { C: z }),
				/* @__PURE__ */ n(w, { C: z }),
				!R && /* @__PURE__ */ n(C, { C: z }),
				/* @__PURE__ */ n(m, {
					name: s,
					C: z
				}),
				H,
				U,
				!I && /* @__PURE__ */ r("g", {
					className: "zuk-pinces",
					children: [/* @__PURE__ */ n(d, {
						side: "left",
						p: B,
						C: z
					}), /* @__PURE__ */ n(d, {
						side: "right",
						p: V,
						C: z
					})]
				}),
				W,
				L && /* @__PURE__ */ n("g", { dangerouslySetInnerHTML: { __html: L } })
			]
		})]
	});
}, L = ({ theme: e = "orange", size: t }) => /* @__PURE__ */ n(I, {
	pose: "idle",
	theme: e,
	size: t,
	accessory: "helmet",
	hideLimbs: !0
});
//#endregion
export { I as Zuki, I as default, L as ZukiFavicon };
