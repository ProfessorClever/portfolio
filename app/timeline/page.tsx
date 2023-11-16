"use client";

import React from 'react'
import { Timeline, Text, Center } from '@mantine/core';
import Link from 'next/link'

export default function Page() {
  return (
    <Center>
      <Timeline pt="lg" color="grape" active={2} bulletSize={27}>
        <Timeline.Item title="Portfolio Website">
          <Text>Diese Webseite hier</Text>
          <Link style={{fontSize: 12}} href="/projects/portfolio-website">show me more!</Link>
        </Timeline.Item>
        <Timeline.Item title="CopRun">
          <Text>Ein Spiel, mit Java Programmiert</Text>
          <Link style={{fontSize: 12}} href="/projects/coprun">show me more!</Link>
        </Timeline.Item>
        <Timeline.Item title="Mythen Stunde Podcast">
          <Text>Ein Podcast über Lovecrafts Universum</Text>
          <Link style={{fontSize: 12}} href="/projects/mythen-stunde">show me more!</Link>
        </Timeline.Item>
        <Timeline.Item title="Interaktive Medien Bachelor">
          <Text>Bachelor für Interaktive Medien an der Technischen Hochschule Augsburg</Text>
        </Timeline.Item>
      </Timeline>
    </Center>
  )
}
