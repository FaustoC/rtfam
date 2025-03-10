---
title: Nested actions or Nested effects
tags:
  - Nested
  - Nesting

---

# Nested actions/effects

## How do you resolve nested effects?

This is not something written, it's mostly a common understanding from old forum posts.

Basically **anything** (cards, orders, abilities) can cause a *condition* for *triggers* to be used, and those triggered abilities can also cause *conditions* for *other triggers* themself.

The order of resolving is basically **like a stack**.

**You resolve the last thing that got declared** first.

:::tip[Example]

A Unit of player 1, who is the active player, attacks. 

Attack is completed (*condition 1*). Then player 1 declares **Swift Strike** to retreat based on *condition 1*. Player 2 declares **Final Strike** based on *condition 1*.

**STACK IS : 1) Swift Strike (active players effect have always the initiative) 2) Final Strike**

Player 1 retreats.

Player 2 can pivot.

Retreat is completed (*condition 2*). Then player 1 declares **Quick Fire** to attack based on *condition 2*.

**STACK IS : 1) Quick Fire 2) Final Strike**

Player 1 attacks with a ranged attack.

Attack is completed (*condition 3*). Then player 2 declares **Sentinel** to charge based on *condition 3*.

**STACK IS : 1) Sentinel 2) Final Strike**

Player 2 charge and attack with the sentinel unit, and kills the charged unit.

Attack is completed (*condition 4*).

Unit is destroyed (*condition 5*).

**STACK IS : 1) Final Strike**

Player 2 execute the Final Strike (with wounds lost only from the first meele attack) without a target.

**STACK IS : Void**

:::
