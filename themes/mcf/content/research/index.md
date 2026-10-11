---
title: Research
description: Research themes of the Modelling Complex Fluids group at The University of Queensland - multiphase, non-Newtonian and particle-laden flows, porous and fractured media, heat transfer, clean hydrogen and high-performance computational methods.
summary: High-fidelity computational modelling of complex fluid systems for the energy and resources sector.
showDate: false
showPagination: false
showAuthor: false
showTableOfContents: true
sites:
- mcf
---

{{< lead >}}
We develop and apply high-fidelity computational methods to understand complex fluid systems, from bubbles and droplets to dense particle suspensions and flow through rough fractures, with a focus on problems in the chemical, energy and resources industries.
{{< /lead >}}

Much of our work is built on the **lattice Boltzmann method** (LBM), which we extend with phase-field models for interfaces, non-Newtonian rheology, thermal coupling and fully resolved particles via the discrete element method (DEM). Models are verified against analytical solutions and validated against experiments, then used to answer engineering questions and to build simpler closure relations and surrogate models that can be used at larger scales. The themes below are described in terms of what our [published work](/mcf/publications/) actually covers; each lists a few representative papers.

{{< figure src="bubbles-annular-pipe.png" alt="Rendering of gas bubbles rising along the outside of a tube inside a larger pipe, with the surrounding liquid coloured by strain rate" caption="Simulation of gas bubbles rising along an annular pipe; colours show strain-rate and velocity magnitude." >}}
{{< todo >}}TODO(MCF): confirm or improve this caption (image taken from the methane pyrolysis PhD advert, content/posts/phd-project-pyrolysis/).{{< /todo >}}

## Multiphase and interfacial flows {#multiphase-flows}

A core capability of the group is the **phase-field lattice Boltzmann method** for immiscible fluids with high density and viscosity contrasts, such as gas and liquid. Our work has improved the locality and stability of the model, extended it to three dimensions, and introduced cascaded and central-moment collision operators, verified on benchmarks such as layered Poiseuille flow, Rayleigh-Taylor instability and rising bubbles. More recent work adds consistent wetting boundary conditions for curved, complex geometries.

These models have been applied extensively to **Taylor bubbles** (the long bubbles found in slug flow) in tubular and annular pipes, motivated by gas-liquid flow in oil, gas and coal seam gas wells. Studies have quantified the effects of fluid properties, pipe inclination, eccentricity, diameter ratio and co- or counter-current liquid flow on bubble rise velocity, and proposed correlations and closure relations for use in upscaled wellbore models.

{{< youtube id="IV6s0hPAKLk" title="Annular Taylor bubble dynamics" >}}

{{< pubs "10.1103/PhysRevE.96.053301" "10.1016/j.ijmultiphaseflow.2018.05.004" "10.1016/j.camwa.2019.08.018" "10.1063/5.0011456" "10.1016/j.ijmultiphaseflow.2023.104626" >}}

## Non-Newtonian and complex fluids {#non-newtonian}

Many industrial and biological fluids do not have a constant viscosity. We have developed lattice Boltzmann models for **generalised-Newtonian and viscoplastic fluids**, including regularised yield-stress formulations that avoid the numerical difficulties of infinite viscosity at zero strain rate. These have been applied to hydraulic fracturing fluids carrying proppant and to transient blood flow in arterial geometries using the Kuang-Luo model.

Combining rheology with interfaces, we recently developed and validated a three-dimensional phase-field LBM for **Herschel-Bulkley fluids** interacting with a Newtonian fluid, validated against analytical solutions including capillary rise and demonstrated in a microfluidic junction. Group members have also used conventional CFD to study complex working fluids such as phase-change ice slurries in heat exchangers and magnetorheological plastomers in dampers.

{{< pubs "10.1016/j.camwa.2024.10.035" "10.1002/cnm.3456" "10.2118/182458-ms" "10.1080/01457632.2018.1428989" "10.1016/j.jmmm.2021.168930" >}}

## Particle-laden flows and suspensions {#particle-suspensions}

We couple the lattice Boltzmann method with the **discrete element method** to resolve every particle in a suspension, including contact, lubrication, electrostatic and physicochemical (DLVO) forces. Methodological work has improved the fluid-solid coupling (the partially saturated method) and its synchronisation with DEM time integration.

These tools have been used to make fundamental findings on **shear-induced migration** of polydisperse suspensions and on **clogging** of micro-particles in narrow channels under electrostatic forces, both published in the *Journal of Fluid Mechanics*. Applied studies include fines migration during coal seam dewatering and the transport and screen-out of proppant, including non-spherical proppant, in realistically rough fractures.

{{< figure src="particle-arch-clogging.jpg" alt="Rendering of a small arch of spherical particles on a channel wall with fluid velocity arrows flowing around it" caption="Flow around an arch of micro-particles in a planar channel, from our study of hydrodynamic clogging ([Di Vaira et al., 2023](https://doi.org/10.1017/jfm.2023.214))." >}}

{{< pubs "10.1017/jfm.2022.166" "10.1017/jfm.2023.214" "10.1016/j.camwa.2018.01.002" "10.1016/j.jngse.2016.09.038" "10.56952/ARMA-2024-0718" >}}

## Flow in porous and fractured media {#porous-fractured-media}

Subsurface flow underpins natural gas production, mineral recovery, geothermal energy and gas storage. We simulate flow directly in **micro-CT images** of rock to compute permeability, for example to quantify the permeability gained from blast-induced microfractures, and have used deep learning to enhance and segment micro-CT images of rock samples.

For **rough fractures**, we run large numbers of GPU simulations on synthetic self-affine fracture surfaces to build statistical surrogate models of permeability, which show substantial departures from the commonly assumed cubic law. Current work extends this towards upscaling single- and two-phase fracture flow with quantifiable uncertainty, including the effect of wettability, and to coupled models of proppant embedment and well productivity in coal seam gas reservoirs.

{{< pubs "10.14264/9d96db0" "10.1007/s11242-022-01875-4" "10.1016/j.camwa.2025.03.014" "10.1016/j.coal.2021.103689" "10.1016/j.mineng.2022.107748" >}}

## Heat transfer and thermocapillary flows {#heat-transfer}

When surface tension depends on temperature, interfaces can drive flow themselves (**thermocapillary or Marangoni flow**). We have developed three-dimensional phase-field LBM models coupled to the energy equation to study this, revealing the three-dimensional nature of "recalcitrant" bubbles that move against the bulk liquid flow, and examining how local heating can capture and manipulate droplets.

We have also developed lattice Boltzmann techniques for **conjugate heat transfer** between fluid and moving particles, and coupled them with DEM to study suspensions in fluids whose viscosity depends on temperature.

{{< pubs "10.1063/5.0038171" "10.1016/j.jcp.2024.113337" "10.1016/j.camwa.2018.01.018" "10.1016/j.powtec.2021.05.011" >}}

## Clean hydrogen and energy processes {#hydrogen-energy}

**Methane pyrolysis** in molten media bubble columns can produce hydrogen without direct carbon dioxide emissions. Our recent study used CFD to examine how gas injection rate and the properties of the gas and molten medium (iron, aluminium and a bromide salt mixture) affect bubble size and flow regime, as a step towards reactor design guidelines. A related [PhD project](/posts/phd-project-pyrolysis/) targets modelling of the coupled hydrodynamics and chemical kinetics of these reactors to support large-scale reactor design.

The group's modelling also supports other energy processes, including multiphase flow in coal seam gas wells and the optical and thermal performance of nanofluid-based concentrated photovoltaic-thermal solar collectors.

{{< youtube id="qrlf8OX2IUY" title="Molten-iron bubble injection" >}}

{{< pubs "10.1063/5.0227299" "10.15530/ap-urtec-2019-198239" "10.1016/j.renene.2024.120735" "10.1016/j.applthermaleng.2023.121944" >}}

## High-performance computational methods {#hpc-methods}

Resolving interfaces, particles and rough geometries in three dimensions requires very large simulations, and parametric or statistical studies require many of them. Our lattice Boltzmann work is designed for **GPU clusters**: studies of particle migration and clogging each involved around a hundred coupled LBM-DEM simulations, and fracture permeability models were built from thousands of GPU flow simulations.

Methods research includes the stability of collision operators and lattice discretisations, cumulant and central-moment schemes, and adjoint lattice Boltzmann methods for gradient-based optimisation. In collaboration with researchers at Friedrich-Alexander-Universität Erlangen-Nürnberg, phase-field models have been implemented in the open-source waLBerla framework, with near-perfect scaling reported on NVIDIA and AMD GPU clusters.

{{< pubs "10.1063/5.0061694" "10.1016/j.jcp.2024.113337" "10.1016/j.camwa.2020.02.020" "10.1007/s10596-015-9542-3" >}}

## Software: TCLB

Much of the group's work uses **[TCLB](https://tclb.io)**, an open-source, GPU-accelerated lattice Boltzmann solver that the group develops and uses. TCLB supports multi-GPU computation with MPI, coupling to discrete element solvers such as LIGGGHTS and ESyS-Particle, and adjoint-based optimisation. The source code is available on [GitHub](https://github.com/CFD-GO/TCLB).

## Collaborate with us

{{< cta title="Working on a complex fluids problem?" button="Contact us" href="/contact/" button2="Join the group" href2="/join/" >}}
We welcome collaboration with industry, government and academic partners on problems involving multiphase, non-Newtonian or particle-laden flows, porous and fractured media, heat transfer and high-performance simulation. Prospective students interested in these topics are encouraged to get in touch.
{{< /cta >}}
