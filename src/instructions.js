import React from 'react'

const Instructions = () => (
  <div>
    <p>
      In this task we are interested in how people think "scientifically" in a simulated experimental setting. You
      will be given
      an initial observation, three numbers which conform to a simple rule. Your task is to discover
      this rule
      by generating a possible rule (a hypothesis) and testing it with
      your own set of three numbers.
    </p>
    <p>
      Enter your guess about the rule together with your test
      triple of numbers below. The only information that will be
      provided is an indication of whether or
      not your test triple conforms or does not conform to the rule.
    </p>
    <p>
      The rule is concerned with a RELATION between any three
      numbers and not with their absolute magnitude; so it is not a
      rule like "all numbers above (or below) 50", etc. Keep in mind
      that this is an arbitrary rule, one from an infinite set of rules
      for which the given observation: (2, 4, 6) is a conforming instance.
    </p>
    <p>
      You may continue as long as you wish to propose guesses
      and tests of them with number triples. Continue until you have
      proven to yourself that you know what the rule is. Only then,
      AND NOT BEFORE, state this rule at the bottom.
      Remember that the instruction "to prove" means to show that
      your rule is the only true one.
    </p>
  </div>
)

export default Instructions


