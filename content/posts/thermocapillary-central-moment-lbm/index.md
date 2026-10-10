---
title: "New paper: a central-moment phase-field lattice Boltzmann model for thermocapillary flows"
date: '2024-12-01'
summary: Published in the Journal of Computational Physics, the model simulates temperature-driven droplet motion and was implemented in the open-source waLBerla framework, with scaling results on NVIDIA and AMD GPU clusters.
mcf:
- news
sites:
- mcf
---

When surface tension depends on temperature, heating can move bubbles and droplets (thermocapillary or Marangoni flow). This study developed a computationally efficient, three-dimensional phase-field lattice Boltzmann model for thermocapillary flows, implemented in the open-source simulation framework waLBerla with the collision stage performed in central moments. The multiphase model was coupled to the energy equation using either a passive-scalar thermal lattice Boltzmann scheme or a Runge-Kutta method; the accuracy of the approaches was similar, with the D3Q7 thermal lattice offering computational benefits and the second-order Runge-Kutta scheme using less memory.

The model was used to study droplet capture by local thermal sources, analogous to thermal tweezers, giving insight into how droplets might be manipulated by local heating. The paper also reports near-perfect scaling on NVIDIA and AMD GPU clusters.

**Authors:** M. Holzer, [T.R. Mitchell](/people/t-mitchell/), [C.R. Leonardi](/people/c-leonardi/) and U. Rüde

**Published in** *Journal of Computational Physics* (2024). DOI: [10.1016/j.jcp.2024.113337](https://doi.org/10.1016/j.jcp.2024.113337)

Read more about our work on [heat transfer and thermocapillary flows](/research/#heat-transfer) and [high-performance computational methods](/research/#hpc-methods).
