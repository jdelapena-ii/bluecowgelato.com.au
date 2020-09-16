import React from 'react';
import PropTypes from 'prop-types';

function BackToTopIcon({ accentClass = 'text-white', ...rest }) {
  return (
    <svg fill="currentColor" viewBox="0 0 503.56 510.24" {...rest}>
      <path d="M58.7 160.35h386.15V335H58.7z" />
      <g fill="currentColor" className={accentClass}>
        <path d="M185.1 283.26c0-.35-.21-.53-.63-.53a.94.94 0 00-.42.11l1.38 6.56c.28-.28.42-.56.42-.85 0-.78-.09-1.66-.26-2.64-.19-.99-.35-1.87-.49-2.65zm20.09-67.06c0-.35-.04-.67-.11-.95-.07-.28-.11-.6-.11-.95-.14.35-.34.72-.58 1.11-.25.39-.37.76-.37 1.11 0 .42.18.74.53.95.43-.28.64-.7.64-1.27zm6.98-26.97c-.07.28-.19.79-.37 1.53s-.37 1.53-.58 2.38c-.21.85-.37 1.6-.48 2.27-.11.67-.16 1.07-.16 1.22v.53c.28-.21.55-.67.79-1.38.25-.7.48-1.46.69-2.27.21-.81.41-1.59.58-2.33.18-.74.34-1.32.48-1.74l-.95.11v-.32zm-7.14 46.22c-.25.85-.37 1.59-.37 2.22 0 .14.07.35.21.63.21-.07.42-.34.63-.79.21-.46.39-.95.53-1.48l.42-1.59c.14-.53.25-.93.32-1.22h-1.06c-.2.65-.43 1.39-.68 2.23zm-24.06 72.67c-.49 0-.83.23-1.01.69-.18.46-.26.86-.26 1.22s.18.6.53.74c.21-.28.4-.58.58-.9.18-.32.27-.65.27-1.01 0-.14-.02-.26-.05-.37s-.06-.23-.06-.37zm-4.44-24.28c-.21-.81-.48-1.59-.79-2.33-.32-.74-.69-1.32-1.11-1.75a17.83 17.83 0 01-2.38-3.54c-.67-1.3-1.71-2.24-3.12-2.8-1.13-.42-2.24-.86-3.33-1.32-1.09-.46-2.24-.9-3.44-1.32-1.34-.49-2.5-.74-3.49-.74-1.2 0-2.4.23-3.6.69s-2.4.83-3.6 1.11c-1.2.28-2.38.76-3.54 1.43-1.16.67-2.27 1.29-3.33 1.85-.71.35-1.23.88-1.59 1.59-.35.49-.72.92-1.11 1.27-.39.35-.76.81-1.11 1.37-.85 1.48-1.64 3.17-2.38 5.08-.74 1.9-1.11 3.74-1.11 5.5 0 1.41.05 2.79.16 4.12.11 1.34.48 2.64 1.11 3.91.56 1.06 1.2 2.03 1.9 2.91.71.88 1.45 1.78 2.22 2.7 1.2 1.48 2.57 2.61 4.12 3.38 1.55.78 3.21 1.48 4.97 2.12.35.14.69.26 1.01.37.32.11.65.16 1.01.16.28 0 .51-.04.69-.11.18-.07.37-.11.58-.11.49 0 1.04.11 1.64.32.6.21 1.25.32 1.96.32 1.13 0 2.4-.18 3.81-.53.56-.14 1.06-.34 1.48-.58.42-.25.92-.37 1.48-.37h.32c.35-.14 1-.51 1.96-1.11.95-.6 1.94-1.25 2.96-1.96s1.92-1.39 2.7-2.06c.78-.67 1.16-1.18 1.16-1.53 0-.85.25-1.59.74-2.22.49-.63.81-1.37.95-2.22.35-1.48.58-2.98.69-4.5.11-1.52.16-3.01.16-4.5 0-.63-.07-1.36-.21-2.17-.15-.8-.33-1.62-.54-2.43zm3.44-12.11c.04-.21.05-.42.05-.63 0-.42-.18-.88-.53-1.37-.42.21-.63.53-.63.95 0 .35.05.72.16 1.11.11.39.37.62.79.69.07-.29.12-.53.16-.75zm-43.37 42.42c-.46-.42-.93-.81-1.43-1.16-.49-.35-.88-.63-1.16-.85 0 .92.39 1.9 1.16 2.96.78 1.06 1.69 1.59 2.75 1.59h.32c0-.42-.16-.85-.48-1.27-.31-.43-.7-.85-1.16-1.27zm25.65 4.7a5.93 5.93 0 01-1.8-.16c-.56-.14-.99-.21-1.27-.21-.49 0-.99.07-1.48.21l-1.48.42c.28.21.58.42.9.63.32.21.65.32 1.01.32s.81-.02 1.37-.05c.56-.04 1.15-.09 1.75-.16.6-.07 1.16-.16 1.69-.26.53-.11.93-.23 1.22-.37l-.11-.32c-.57-.06-1.16-.08-1.8-.05zm55.42-139.98c.63 0 .95-.28.95-.85 0-.28-.14-.69-.42-1.22-.28-.53-.6-.79-.95-.79-.21 0-.34.09-.37.26-.04.18-.12.34-.26.48l.26 1.32c.11.53.37.8.79.8zm51.62 141.62c-.21.42-.32.92-.32 1.48v.42c0 .21.02.44.05.69.04.25.02.51-.05.79.14-.07.41-.23.79-.48s.58-.44.58-.58c0-.42-.09-.86-.26-1.32-.18-.45-.44-.79-.79-1zm.1-57.85c-.21-.07-.55-.12-1-.16-.46-.04-.95-.07-1.48-.11-.53-.04-1.02-.05-1.48-.05h-2.28c-.56 0-1.43.02-2.59.05-1.16.04-1.96.12-2.38.26.35.35.74.56 1.16.63.42.07.88.11 1.37.11h4.55c1.06 0 2.12-.04 3.17-.11.57.01.89-.2.96-.62zM264 291.72h-.85v16.18l.42.11c.14-.56.26-1.13.37-1.69.11-.56.16-1.13.16-1.69v-4.76c0-1.41-.02-2.77-.05-4.07-.03-1.31-.05-2.67-.05-4.08zm-20.94-34.48c-.14.28-.23.48-.26.58-.04.11-.05.34-.05.69v.42c0 .14.02.32.05.53.04.21.16.32.37.32.14 0 .32-.04.53-.11.21-.07.39-.14.53-.21 0-.14.02-.23.05-.26.04-.04.05-.12.05-.26 0-.35-.16-.69-.48-1.01-.32-.32-.58-.55-.79-.69zm26.97 19.36c-.14.28-.21.46-.21.53.14.56.42.85.85.85.49 0 .81-.11.95-.32.14-.21.25-.53.32-.95l-.21-.42-1.7.31zm-134.96 24.01c.07-.28.16-.55.26-.79.11-.25.16-.51.16-.79 0-.35-.14-.74-.42-1.16-.42.14-.65.39-.69.74-.04.35-.05.71-.05 1.06 0 .55.24.87.74.94zm83.24-96.04c-.71 2.26-1.39 4.53-2.06 6.82-.67 2.29-1.29 4.6-1.85 6.93 1.41.07 2.79.12 4.12.16 1.34.04 2.71.05 4.13.05h.42c-.63-2.26-1.34-4.64-2.12-7.14-.77-2.5-1.66-4.77-2.64-6.82zm22.84 33.85c.21-.07.51-.16.9-.26s.58-.3.58-.58c0-.35-.18-.71-.53-1.06l-.85-.85c-.21.35-.32.7-.32 1.06s.04.63.11.85c.08.2.11.48.11.84zm-14.06-34.38c-.14-.78-.3-1.46-.48-2.06-.18-.6-.33-.9-.48-.9-.28 0-.42.11-.42.32l1.8 6.24c0-.21-.04-.67-.11-1.37-.07-.71-.17-1.45-.31-2.23zm-9.1 21.79v1.37h.63c.71 0 1.45.02 2.22.05.78.04 1.45-.12 2.01-.48-.78-.42-1.57-.65-2.38-.69-.81-.02-1.63-.11-2.48-.25zm18.03-3.28c-.25-.56-.48-1.08-.69-1.53-.21-.46-.35-.69-.42-.69s-.11.04-.11.1c.07.28.14.51.21.69.07.18.11.44.11.79 0 .14.05.39.16.74.1.35.25.72.42 1.11.18.39.35.74.53 1.06.18.32.34.48.48.48.14 0 .21-.07.21-.21s-.09-.46-.26-.95-.39-1.03-.64-1.59zm-126.86 35.91c-.42.32-.63.65-.63 1 0 .21.04.35.11.42.49-.14.93-.32 1.32-.53.39-.21.65-.6.79-1.16a.724.724 0 00-.53-.21c-.29 0-.64.16-1.06.48zm52.03-26.6c-.42.07-.81.23-1.16.48-.35.25-.53.58-.53 1.01 0 .35.18.53.53.53.28 0 .67-.11 1.16-.32.49-.21.74-.49.74-.85a.54.54 0 00-.26-.48 2.55 2.55 0 01-.48-.37zm4.66-19.99c-.63-1.34-1.76-2.22-3.39-2.64-1.62-.42-3.1-.63-4.44-.63h-4.92c-.95 0-1.87.04-2.75.11-.88.07-1.53.14-1.96.21-.14 1.2-.25 2.43-.32 3.7a67.073 67.073 0 00-.05 6.19c.04.81.05 1.64.05 2.49 0 1.27-.02 2.26-.05 2.96-.04.7.09 1.2.37 1.48s.74.44 1.37.48c.63.04 1.66.05 3.07.05 2.54 0 5.15-.11 7.83-.32 2.11-.14 3.77-1.06 4.97-2.75 1.2-1.69 1.8-3.53 1.8-5.5 0-.99-.14-1.97-.42-2.96-.28-1-.67-1.96-1.16-2.87zm120.36 46.59c-.42.32-.63.65-.63 1 0 .21.04.35.11.42.49-.14.93-.32 1.32-.53.39-.21.65-.6.79-1.16a.724.724 0 00-.53-.21c-.29 0-.64.16-1.06.48zm-110.84-34.64c-.21.49-.35.99-.42 1.48s-.18.99-.32 1.48l.21.63c.35-.42.67-1.04.95-1.85.28-.81.53-1.67.74-2.59.21-.92.39-1.8.53-2.64.14-.85.21-1.55.21-2.12v-1.32c0-.46-.07-.9-.21-1.32-.49.78-.79 1.59-.9 2.43-.11.85-.16 1.69-.16 2.54-.07.56-.14 1.11-.21 1.64-.07.53-.21 1.08-.42 1.64zm-20.95-23.53c-.28.11-.46.34-.53.69.14 0 .3.02.48.05.18.04.33.05.48.05.21 0 .69-.07 1.43-.21.74-.14 1.11-.39 1.11-.74s-.37-.58-1.11-.69c-.74-.11-1.29-.19-1.64-.26.14.14.21.32.21.53 0 .28-.14.47-.43.58zM92.97 276.6c-.14.28-.21.46-.21.53.14.56.42.85.85.85.49 0 .81-.11.95-.32.14-.21.25-.53.32-.95l-.21-.42-1.7.31zm81.39-84.09c.25-.42.48-.9.69-1.43.21-.53.39-1.07.53-1.64.14-.56.21-.95.21-1.16 0-.28-.11-.42-.32-.42-.21 0-.39.39-.53 1.16-.14.78-.28 1.3-.42 1.59-.14.21-.41.62-.79 1.22-.39.6-.62.97-.69 1.11.28.14.46.21.53.21.28 0 .54-.21.79-.64zm-38.87 76.05c.21.07.39.11.53.11h.32c.42 0 .76-.19 1.01-.58.25-.39.37-.76.37-1.11 0-.21-.07-.48-.21-.79-.14-.32-.35-.48-.63-.48s-.63.33-1.06 1c-.42.67-.63 1.15-.63 1.43-.02.21.09.35.3.42zM66 257.24c-.14.28-.23.48-.27.58s-.05.34-.05.69v.42c0 .14.02.32.05.53.04.21.16.32.37.32.14 0 .32-.04.53-.11.21-.07.39-.14.53-.21 0-.14.02-.23.05-.26s.05-.12.05-.26c0-.35-.16-.69-.48-1.01-.3-.32-.57-.55-.78-.69zm26.23 63.25c-.21.42-.32.92-.32 1.48v.42c0 .21.02.44.05.69.04.25.02.51-.05.79.14-.07.4-.23.79-.48s.58-.44.58-.58c0-.42-.09-.86-.27-1.32-.16-.45-.42-.79-.78-1zm-5.29-28.77h-.84v16.18l.42.11c.14-.56.26-1.13.37-1.69.11-.56.16-1.13.16-1.69v-4.76c0-1.41-.02-2.77-.05-4.07-.04-1.31-.06-2.67-.06-4.08zm42.63-11.1l-.21.11c-.85 1.9-1.43 3.56-1.74 4.97-.32 1.41-.48 3.14-.48 5.18 0 .63.28 1.23.85 1.8.14-.56.21-.99.21-1.27 0-1.13.02-2.17.05-3.12.04-.95.23-1.96.58-3.01 0-.14.07-.42.21-.85.14-.42.27-.88.37-1.37.11-.49.21-.93.32-1.32.11-.39.16-.65.16-.79 0-.23-.11-.33-.32-.33zm8.14-100.48c0 .28-.02.53-.05.74-.04.21-.05.42-.05.63v1c0 .32.04.65.11 1.01.14-.21.26-.71.37-1.48.11-.78.18-1.59.21-2.43.04-.85.07-1.66.11-2.43.04-.78.05-1.34.05-1.69 0-.28-.07-.7-.21-1.27h-.21l-.11.53c-.07.35-.12.7-.16 1.06-.04.35-.09.71-.16 1.06l-.11.53c0 .49.04.97.11 1.43.07.44.1.88.1 1.31zm1.91 24.75c.21 0 .37-.11.48-.32.11-.21.16-.42.16-.63 0-.56-.25-.85-.74-.85-.42 0-.63.25-.63.74 0 .21.05.44.16.69.09.24.28.37.57.37zm32.68 57.85c0-.14.02-.25.05-.32.04-.07.05-.18.05-.32 0-.35-.09-.56-.26-.63-.18-.07-.37-.14-.58-.21-.35-.14-.85-.33-1.48-.58-.63-.25-1.13-.37-1.48-.37-.42 0-.78.11-1.06.32.63.7 1.37 1.16 2.22 1.37s1.69.46 2.54.74zm-17.35-.1c-.21-.49-.56-.74-1.06-.74-.35 0-.69.02-1.01.05-.32.04-.55.26-.69.69.71.28 1.23.42 1.59.42s.75-.14 1.17-.42zm12.48-60.71l-.11.11c.28.35.6.69.95 1 .35.32.71.62 1.06.9.28.21.58.32.9.32s.58.18.79.53c.28.49.67.88 1.16 1.16l.11-.42c-.21-.49-.44-.95-.69-1.37-.25-.42-.62-.74-1.11-.95a28.1 28.1 0 01-1.53-.69c-.66-.33-1.17-.52-1.53-.59zm-.31-25.71l1.06.63c.35.21.69.41 1.01.58.32.18.51.26.58.26l.11-.11c-.35-.56-.83-1.02-1.43-1.37-.6-.35-1.18-.6-1.74-.74l-.32.11.11.21c.05.08.26.22.62.43zm-27.08 57.23v1.53c0 .53.1 1.01.32 1.43.21-.35.42-.69.63-1 .21-.32.32-.69.32-1.11 0-.28-.04-.53-.11-.74-.07-.21-.11-.46-.11-.74 0-.78-.02-1.59-.05-2.43-.04-.85-.05-1.66-.05-2.43 0-.56.05-1.13.16-1.69.1-.56.16-1.13.16-1.69v-2.12l-.32-.53c-.28.92-.44 1.78-.48 2.59-.04.81-.09 1.71-.16 2.7-.07.99-.14 2.01-.21 3.07-.07 1.04-.1 2.1-.1 3.16zm9.41-61.09c.28.11.53.16.74.16.63 0 1.13-.32 1.48-.95-.35-.21-.74-.32-1.16-.32-.21 0-.51.04-.9.11s-.58.25-.58.53c0 .21.14.37.42.47zm-1.37 20.68c0 .49.19.79.58.9.39.11.76.16 1.11.16.63 0 1.29-.02 1.96-.05.67-.04 1.32-.09 1.96-.16 1.13-.07 2.27-.11 3.44-.11 1.16 0 2.29-.12 3.38-.37 1.09-.25 2.08-.67 2.96-1.27.88-.6 1.6-1.53 2.17-2.8.14-.35.25-.67.32-.95s.1-.6.1-.95c0-1.2-.58-2.22-1.74-3.07-1.16-.85-2.31-1.27-3.44-1.27-.71 0-1.39-.07-2.06-.21-.67-.14-1.39-.21-2.17-.21-1.41 0-2.82.04-4.23.11l-4.23.21c-.07.56-.14 1.08-.21 1.53-.07.46-.11.97-.11 1.53a110.683 110.683 0 00.21 6.98zm-55.74 69.6c-.21-.07-.55-.12-1.01-.16-.46-.04-.95-.07-1.48-.11-.53-.04-1.02-.05-1.48-.05H86.1c-.56 0-1.43.02-2.59.05-1.16.04-1.96.12-2.38.26.35.35.74.56 1.16.63.42.07.88.11 1.38.11h4.54c1.06 0 2.11-.04 3.17-.11.57.01.89-.2.96-.62zm247.07-57.01c-.07.14-.25.39-.53.74s-.56.72-.85 1.11c-.28.39-.53.74-.74 1.06-.21.32-.32.51-.32.58l.21.11.11.11c.49 0 1.06-.4 1.69-1.22.63-.81.95-1.43.95-1.85.01-.22-.17-.43-.52-.64zm10.79-8.36c0 .28.11.48.32.58.21.11.42.16.63.16l.21-1.48a1.19 1.19 0 00-.53-.11c-.42.01-.63.29-.63.85zm-18.72 20.1c0 .99-.05 1.94-.16 2.86-.11.92-.16 1.87-.16 2.86 0 .99.11 1.94.32 2.86.14-.07.25-.18.32-.32-.14-.71-.14-1.39 0-2.06.14-.67.21-1.36.21-2.06 0-.35-.05-1.06-.16-2.12-.11-1.07-.23-1.74-.37-2.02zm28.66 18.3c0 .35.02.7.05 1.06s.14.65.32.9.44.37.79.37c.28 0 .42-.14.42-.42 0-.14-.04-.39-.11-.74s-.16-.72-.27-1.11a4.26 4.26 0 00-.42-1.01c-.18-.28-.34-.42-.48-.42s-.25.05-.32.16-.14.19-.21.26l.21.11v.84zm-3.7-18.46c-.14-.53-.3-1.08-.48-1.64-.18-.56-.35-1.08-.53-1.53-.18-.46-.34-.72-.48-.79l-.11.11c.07.42.11.86.11 1.32s.11.9.32 1.32c.42.63.74 1.34.95 2.12l.53 2.43c.14.78.4 1.46.79 2.06.39.6.76 1.25 1.11 1.96.14 0 .21-.04.21-.11v-.21c-.35-.99-.76-1.97-1.22-2.96-.46-.99-.79-1.97-1-2.96.01-.22-.06-.59-.2-1.12zm9.31-41.62c0-.28-.07-.46-.21-.53-.07-.07-.18-.11-.32-.11-.42 0-.76.3-1 .9-.25.6-.37 1.08-.37 1.43v.32c.35-.14.76-.4 1.22-.79.45-.39.68-.8.68-1.22zm-10.47-.95c-.85 1.2-1.34 2.19-1.48 2.96.42-.07.74-.35.95-.85.42-.78.92-1.46 1.48-2.06.56-.6 1.09-1.29 1.59-2.06v-.11l-.42-.53c-.57.57-1.28 1.45-2.12 2.65zm-27.72 5.5c.07-.35.11-.78.11-1.27v-4.03c0-.56-.02-1.15-.05-1.75-.04-.6-.05-1.18-.05-1.74h-.21c-.35.92-.53 1.76-.53 2.54 0 .28.02.55.05.79.04.25-.02.51-.16.79-.21.56-.32 1.16-.32 1.8 0 1.27.25 2.43.74 3.49.21-.06.35-.27.42-.62zm-.84 55.95l-1.37.95c0 .07-.02.12-.05.16-.04.04-.05.09-.05.16 0 .42.28.85.85 1.27l1.59-.74c.07-.21.11-.49.11-.85-.02-.49-.38-.81-1.08-.95zm4.76-41.14c0-.21-.07-.48-.21-.79s-.35-.48-.63-.48-.49.16-.63.48-.21.58-.21.79c0 .28.05.58.16.9.11.32.3.48.58.48.35 0 .6-.16.74-.48.13-.32.2-.62.2-.9zm66.42 89.69v-6.13c0-.92-.14-1.8-.42-2.64-.35.56-.55 1.16-.58 1.8-.04.63-.05 1.27-.05 1.9v4.13c0 1.34.07 2.71.21 4.12.56-.79.84-1.84.84-3.18zm31.31 8.04c-.42 0-.92.21-1.48.63-.56.42-.85.85-.85 1.27 0 .35.14.53.42.53.21 0 .58-.16 1.11-.48.53-.32.9-.55 1.11-.69.14-.07.23-.18.26-.32.04-.14.12-.28.26-.42a4.64 4.64 0 00-.42-.37.67.67 0 00-.41-.15zm-11.11-19.57c-.14-.14-.33-.25-.58-.32-.25-.07-.48-.14-.69-.21-.49-.21-1.08-.46-1.75-.74-.67-.28-1.22-.49-1.64-.63-.99-.14-1.97-.26-2.96-.37-.99-.11-1.98-.16-2.96-.16h-1.96c-.81 0-1.32.28-1.53.85-.28.49-.49 1.39-.63 2.7-.14 1.3-.23 2.71-.26 4.23s-.05 2.98-.05 4.39v3.17c0 .7.02 1.39.05 2.06.04.67.09 1.39.16 2.17V293c.07.92.3 1.45.69 1.59s1 .21 1.85.21c1.2 0 2.43-.11 3.7-.32 1.27-.21 2.5-.46 3.7-.74 2.19-.42 4.02-1.3 5.5-2.64.63-.49 1.07-1.11 1.32-1.85s.55-1.46.9-2.17c.14-.28.26-.71.37-1.27.11-.56.18-1.16.21-1.8.04-.63.07-1.25.11-1.85s.05-1.07.05-1.43c0-1.48-.32-2.87-.95-4.18-.64-1.31-1.52-2.45-2.65-3.44z" />
        <path d="M494.82 200.04c-3.92-12.59-8.88-25.06-14.87-37.42-1.81-3.73-3.71-7.4-5.64-11.05a245.41 245.41 0 00-31.07-48.96 408.07 408.07 0 00-4.12-5.57l-2.08-2.85-26.29-32.78c-5.54-6.65-13.14-12.71-22.84-18.18-9.69-5.46-18.45-9.38-26.29-11.76-3.69-.95-6.92-2.62-9.69-4.99-2.77-2.38-6.23-4.04-10.38-4.99-5.07-1.42-10.38-3.8-15.92-7.12-5.53-3.33-12.92-5.78-18.45-5.78l-1.34-.21C299.38 6 293.7 5.34 286.54 4.4c-7.15-.95-13.95-1.43-20.41-1.43-16.15 0-30.56 1.07-43.24 3.21-12.69 2.14-24.79 5.23-36.33 9.26-11.53 4.04-23.07 9.26-34.6 15.68-11.53 6.42-24.22 13.9-38.06 22.45C96.37 64.5 80.69 77.8 66.85 93.48c-13.84 15.68-25.6 32.91-35.29 51.67-9.69 18.77-17.07 38.49-22.14 59.16-5.07 20.67-7.61 41.22-7.61 61.65 0 5.23.69 10.45 2.08 15.68 1.38 5.23 2.53 10.45 3.46 15.68 3.23 22.81 9.69 46.33 19.37 70.56 9.69 24.23 22.6 44.43 38.75 60.58l8.3 7.13c2.77 2.37 5.3 4.99 7.61 7.84 7.84 9.51 16.15 16.87 24.91 22.1 1.85.95 3.58 2.02 5.19 3.21 1.61 1.18 3.34 2.49 5.19 3.92 10.15 8.56 21.57 14.26 34.25 17.11 12.68 2.85 25.26 5.7 37.71 8.56 8.31 1.9 14.53 3.45 18.68 4.63 4.15 1.18 10.84 1.78 20.06 1.78l14.11.29 10.8.07c4.61.71 8.99 1.07 13.14 1.07h4.27c5.54.48 10.84-.48 20.29-1.43 9.46-.95 19.15-2.49 29.06-4.63 9.92-2.14 19.38-4.51 28.37-7.13 8.99-2.61 16.03-5.58 21.11-8.91 3.69-2.37 7.38-4.63 11.07-6.77 3.69-2.14 7.61-4.4 11.76-6.77 2.77-1.9 5.65-3.8 8.65-5.7 2.62-1.66 6.95-3.28 8.92-5.89l2.45-3.24 3.61-4.21c8.76-8.55 9.12-10.42 17.88-16.6 8.77-6.18 15.91-15.2 21.45-27.08 9.69-19.96 17.53-35.75 23.53-47.4 6-11.64 10.73-22.81 14.19-33.5 3.46-10.69 5.77-22.81 6.92-36.35 1.15-13.54 1.73-31.95 1.73-55.24.02-10.93-1.94-22.69-5.86-35.28zM115.08 260.1v2.12c0 .85-.02 1.73-.05 2.64-.04.92-.09 1.76-.16 2.54s-.21 1.41-.42 1.9c-.35.78-.92 1.27-1.69 1.48a8.9 8.9 0 01-2.33.32c-.92 0-1.82.04-2.7.11-.88.07-1.78.11-2.7.11h-4.44c-.63 0-1.11.35-1.43 1.06-.32.7-.55 1.5-.69 2.38-.14.88-.21 1.76-.21 2.64v1.96c0 1.69.05 3.39.16 5.08s.16 3.42.16 5.18c0 1.13-.04 2.26-.11 3.38-.07 1.13-.11 2.29-.11 3.49 0 .35.02.74.05 1.16.04.42.05.85.05 1.27 0 .35-.05.76-.16 1.22-.11.46-.16.9-.16 1.32 0 .7.04 1.39.11 2.06.07.67.11 1.36.11 2.06 0 .99.09 2.01.26 3.07.18 1.06.26 2.12.26 3.17 0 .35-.04.72-.11 1.11-.07.39-.11.79-.11 1.22 0 1.06.07 2.12.21 3.17.14 1.06.21 2.15.21 3.28 0 .78-.02 1.57-.05 2.38-.04.81-.09 1.6-.16 2.38-.07.56-.3 1.04-.69 1.43-.39.39-.86.62-1.43.69-1.83.21-3.68.41-5.55.58-1.87.18-3.72.26-5.55.26-1.13 0-2.29-.35-3.49-1.06-.78-.35-1.22-.9-1.32-1.64-.11-.74-.16-1.5-.16-2.27 0-.71.04-1.37.11-2.01s.11-1.3.11-2.01c0-1.62-.09-3.21-.26-4.76a41.3 41.3 0 01-.26-4.76c0-.78.02-1.52.05-2.22s.05-1.41.05-2.12c0-.28-.02-.53-.05-.74s-.05-.42-.05-.63c0-.42.07-.81.21-1.16s.21-.71.21-1.06c0-.7.04-1.37.11-2.01.07-.63.1-1.3.1-2.01 0-.78-.03-1.55-.1-2.33s-.11-1.55-.11-2.33c0-2.12.02-4.25.05-6.4s.02-4.28-.05-6.4v-2.06c0-.67-.04-1.32-.11-1.96-.07-.56-.19-1.09-.37-1.59-.18-.49-.26-1.02-.26-1.59 0-1.34-.25-2.06-.74-2.17-.49-.11-1.34-.16-2.54-.16-1.55 0-3.08.04-4.6.11-1.52.07-3.01.11-4.5.11-.28 0-.63-.04-1.06-.11-.42-.07-.85-.16-1.27-.26s-.79-.26-1.11-.48c-.32-.21-.51-.49-.58-.85-.35-1.76-.53-3.39-.53-4.87v-.95h.11c0-1.27-.02-2.57-.05-3.91-.04-1.34.05-2.61.26-3.81 0-.78.39-1.16 1.16-1.16.78-.07 1.43-.14 1.96-.21.53-.07 1.15-.18 1.85-.32l.32-.11c.56 0 1.09.04 1.59.11.49.07 1.02.11 1.59.11 2.19 0 4.34-.11 6.45-.32.85.35 1.8.55 2.86.58 1.06.04 2.05.05 2.96.05 1.13 0 2.24-.09 3.33-.26 1.09-.18 2.17-.26 3.23-.26.28 0 .55.02.79.05a5 5 0 00.79.05c.56 0 1.09-.05 1.59-.16s1.02-.16 1.59-.16h6.35c1.34 0 2.68.07 4.02.21 1.34.14 2.71.18 4.12.11h1.59c.92 0 1.62.18 2.12.53.49.35.85.81 1.06 1.38.21.56.32 1.2.32 1.9v2.13zm16.18-82.08c.07-1.97.11-3.98.11-6.03 0-.49.11-1.02.32-1.59.21-.56.39-1.09.53-1.59.14-.35.55-.6 1.22-.74.67-.14 1.39-.23 2.17-.26.78-.04 1.53-.04 2.27 0s1.29.05 1.64.05h1.22c.39 0 .79-.04 1.22-.11 2.04-.14 4.07-.23 6.08-.26 2.01-.04 4.04-.05 6.08-.05 1.2 0 2.34.07 3.44.21 1.09.14 2.24.25 3.44.32.78.07 1.57.11 2.38.11.81 0 1.6.07 2.38.21l.74.21c.49.14 1.02.28 1.59.42.56.14 1.09.28 1.59.42l.74.21c.35.21.81.46 1.37.74.56.28 1.13.6 1.69.95s1.09.71 1.59 1.06c.49.35.88.67 1.16.95l1.69 1.69c.63.63 1.09 1.3 1.38 2.01.21.63.42 1.43.63 2.38.21.95.42 1.94.63 2.96.21 1.02.39 2.03.53 3.01.14.99.21 1.8.21 2.43 0 2.19-.48 4.44-1.43 6.77-.95 2.33-2.1 4.34-3.44 6.03-.14.07-.28.25-.42.53.28.42.53.71.74.85.85.78 1.68 1.73 2.49 2.86.81 1.13 1.5 2.33 2.06 3.6s1.02 2.56 1.38 3.86c.35 1.3.53 2.56.53 3.75 0 1.48-.16 3.07-.48 4.76l-.9 4.76c-.14.42-.3.85-.48 1.27-.18.42-.34.85-.48 1.27-.78 1.97-1.76 3.77-2.96 5.39-.21.35-.48.65-.79.9-.32.25-.65.51-1.01.79-1.55 1.41-3.49 2.57-5.82 3.49-2.33.92-4.78 1.62-7.35 2.12-2.57.49-5.15.83-7.72 1.01s-4.85.26-6.82.26c-.99 0-1.94-.02-2.86-.05-.92-.04-1.87-.09-2.86-.16-1.55-.14-3.1-.19-4.65-.16-1.55.04-3.14.02-4.76-.05-.56 0-.9-.05-1.01-.16-.1-.11-.23-.41-.37-.9-.14-.42-.25-1.34-.32-2.75s-.14-2.94-.21-4.6c-.07-1.66-.11-3.24-.11-4.76v-3.23c0-2.68.07-5.39.21-8.14.14-2.75.21-5.47.21-8.14 0-.78-.04-1.55-.11-2.33s-.11-1.55-.11-2.33c0-.42.04-.85.11-1.27.07-.42.11-.85.11-1.27 0-.49-.02-.97-.05-1.43a18.325 18.325 0 01.06-3.33c.07-.63.11-1.3.11-2.01 0-.21-.04-.44-.11-.69-.07-.25-.11-.48-.11-.69-.14-1.62-.25-3.23-.32-4.81-.07-1.59-.11-3.15-.11-4.71.01-2.02.05-4.03.12-6.01zm63.41 110.48c-.04 1.38-.16 2.73-.37 4.07v.42c0 .35.02.72.05 1.11.04.39.05.76.05 1.11 0 1.2-.09 2.42-.27 3.65-.18 1.23-.44 2.45-.79 3.65l-1.06 3.17c-.21.92-.62 1.9-1.22 2.96s-1.27 2.12-2.01 3.17a50.5 50.5 0 01-2.33 3.07c-.81.99-1.53 1.83-2.17 2.54-.42.56-.92 1.15-1.48 1.74s-1.13 1.11-1.69 1.53c-.56.35-1.16.72-1.8 1.11-.63.39-1.16.79-1.59 1.22-.49.56-1.15 1.08-1.96 1.53-.81.46-1.67.88-2.59 1.27-.92.39-1.82.71-2.7.95-.88.25-1.68.41-2.38.48-.56.07-1.08.18-1.53.32-.46.14-.93.25-1.43.32-.71.07-1.41.12-2.12.16-.7.04-1.41.05-2.12.05a8.9 8.9 0 01-2.33-.32c-.78-.21-1.37-.32-1.8-.32-1.06 0-2.12-.07-3.17-.21l-3.17-.42c-1.34-.14-2.61-.4-3.81-.79-1.2-.39-2.43-.72-3.7-1.01-.99-.21-2.03-.63-3.12-1.27-1.09-.63-2.1-1.23-3.01-1.8-.92-.49-1.82-.99-2.7-1.48-.88-.49-1.78-1.02-2.7-1.59-.56-.35-1.06-.85-1.48-1.48-.85-1.13-1.8-2.12-2.86-2.96-1.06-.85-1.87-1.97-2.43-3.39-.21-.78-.51-1.5-.9-2.17-.39-.67-.72-1.36-1.01-2.06-.35-.85-.67-1.67-.95-2.49-.28-.81-.53-1.64-.74-2.49-.42-1.76-.65-3.67-.69-5.71-.04-2.04-.05-3.95-.05-5.71 0-1.69.07-3.42.21-5.18.14-1.76.46-3.46.95-5.08.14-.63.37-1.25.69-1.85.32-.6.62-1.18.9-1.74.63-1.41 1.3-2.79 2.01-4.12.71-1.34 1.48-2.68 2.33-4.02.21-.35.62-.85 1.22-1.48s1.27-1.27 2.01-1.9c.74-.63 1.46-1.23 2.17-1.8.71-.56 1.27-.99 1.69-1.27 1.62-1.13 3.14-2.19 4.55-3.17 1.41-.99 2.86-1.83 4.34-2.54s3.07-1.25 4.76-1.64c1.69-.39 3.63-.58 5.82-.58.99 0 1.99-.05 3.01-.16s2.03-.16 3.01-.16c1.76 0 3.54.18 5.34.53 1.8.35 3.51.78 5.13 1.27 2.82.85 5.2 1.82 7.14 2.91 1.94 1.09 3.67 2.38 5.18 3.86 1.52 1.48 2.91 3.16 4.18 5.02 1.27 1.87 2.61 3.97 4.02 6.29.35.56.67 1.34.95 2.33.28.99.53 1.87.74 2.64.07.28.21.7.42 1.27.21.56.42 1.15.63 1.74.21.6.39 1.16.53 1.69s.21.9.21 1.11c.04 1.37.02 2.72-.01 4.1zm36.44-47.23c-1.2 0-2.05-.25-2.54-.74-.49-.49-.85-1.27-1.06-2.33-.07-.28-.16-.74-.26-1.38-.11-.63-.23-1.3-.37-2.01-.14-.71-.28-1.34-.42-1.9-.14-.56-.28-.92-.42-1.06l-.21-.11c-.78-.14-1.57-.21-2.38-.21h-2.38c-.35 0-.69-.04-1-.11-.32-.07-.65-.11-1.01-.11-.92 0-1.82.09-2.7.26-.88.18-1.75.23-2.59.16h-2.22c-.35 0-.6.04-.74.11-.14.14-.28.62-.42 1.43-.14.81-.25 1.36-.32 1.64-.21.78-.39 1.59-.53 2.43-.14.85-.39 1.62-.74 2.33s-.83 1.29-1.43 1.74c-.6.46-1.43.69-2.49.69-.56 0-1.08-.04-1.53-.11-.46-.07-.97-.11-1.53-.11l-7.3-.21c-.21 0-.53-.07-.95-.21-1.27-.35-1.9-1.09-1.9-2.22 0-.49.26-1.69.79-3.6.53-1.9 1.13-3.95 1.8-6.14.67-2.19 1.34-4.3 2.01-6.35.67-2.04 1.15-3.49 1.43-4.34.63-2.12 1.2-4.27 1.69-6.45.49-2.19 1.13-4.3 1.9-6.35.28-.78.53-1.69.74-2.75.07-.63.25-1.41.53-2.33l.85-2.75c.28-.92.55-1.78.79-2.59.25-.81.37-1.46.37-1.96 0-.21-.04-.44-.11-.69-.07-.25-.11-.48-.11-.69 0-.49.07-.99.21-1.48l.42-1.48c.21-.92.44-1.82.69-2.7.25-.88.44-1.82.58-2.8.14-1.06.41-2.08.79-3.07.39-.99.69-2.01.9-3.07.35-1.2.67-2.29.95-3.28.28-.99.6-2.08.95-3.28.28-1.06 1.02-1.69 2.22-1.9.78-.71 1.67-1.11 2.7-1.22 1.02-.11 2.03-.16 3.01-.16v-.21l4.55.42c1.06.14 1.8.67 2.22 1.59.78 1.62 1.38 3.35 1.8 5.18.42 1.83.88 3.63 1.37 5.39.63 2.33 1.3 4.64 2.01 6.93.71 2.29 1.38 4.6 2.01 6.93.35 1.13.69 2.26 1 3.39.32 1.13.65 2.26 1 3.38l.74 1.8c.56 1.48 1.11 2.96 1.64 4.44.53 1.48 1.08 2.96 1.64 4.44 1.41 4.02 2.75 7.99 4.02 11.9s2.5 7.88 3.7 11.9c.14.42.35 1.11.63 2.06s.42 1.67.42 2.17c0 .56-.21 1.01-.63 1.32-.42.32-.93.53-1.53.63-.6.11-1.2.16-1.8.16h-1.53c-1.69 0-3.37-.07-5.02-.21-1.64-.08-3.28-.15-4.9-.15zm61.02 18.83v2.12c0 .85-.02 1.73-.05 2.64-.04.92-.09 1.76-.16 2.54s-.21 1.41-.42 1.9c-.35.78-.92 1.27-1.69 1.48a8.9 8.9 0 01-2.33.32c-.92 0-1.82.04-2.7.11-.88.07-1.78.11-2.7.11h-4.44c-.63 0-1.11.35-1.43 1.06-.32.7-.55 1.5-.69 2.38-.14.88-.21 1.76-.21 2.64v1.96c0 1.69.05 3.39.16 5.08s.16 3.42.16 5.18c0 1.13-.04 2.26-.11 3.38-.07 1.13-.11 2.29-.11 3.49 0 .35.02.74.05 1.16.04.42.05.85.05 1.27 0 .35-.05.76-.16 1.22-.11.46-.16.9-.16 1.32 0 .7.04 1.39.11 2.06.07.67.11 1.36.11 2.06 0 .99.09 2.01.26 3.07.18 1.06.26 2.12.26 3.17 0 .35-.04.72-.11 1.11-.07.39-.11.79-.11 1.22 0 1.06.07 2.12.21 3.17.14 1.06.21 2.15.21 3.28 0 .78-.02 1.57-.05 2.38-.04.81-.09 1.6-.16 2.38-.07.56-.3 1.04-.69 1.43-.39.39-.86.62-1.43.69-1.83.21-3.68.41-5.55.58-1.87.18-3.72.26-5.55.26-1.13 0-2.29-.35-3.49-1.06-.78-.35-1.22-.9-1.32-1.64-.11-.74-.16-1.5-.16-2.27 0-.71.04-1.37.11-2.01s.11-1.3.11-2.01c0-1.62-.09-3.21-.26-4.76a41.3 41.3 0 01-.26-4.76c0-.78.02-1.52.05-2.22s.05-1.41.05-2.12c0-.28-.02-.53-.05-.74s-.05-.42-.05-.63c0-.42.07-.81.21-1.16s.21-.71.21-1.06c0-.7.04-1.37.11-2.01.07-.63.11-1.3.11-2.01 0-.78-.04-1.55-.11-2.33s-.11-1.55-.11-2.33c0-2.12.02-4.25.05-6.4.04-2.15.02-4.28-.05-6.4v-2.06c0-.67-.04-1.32-.11-1.96-.07-.56-.19-1.09-.37-1.59-.18-.49-.26-1.02-.26-1.59 0-1.34-.25-2.06-.74-2.17-.49-.11-1.34-.16-2.54-.16-1.55 0-3.09.04-4.6.11-1.51.07-3.01.11-4.49.11-.28 0-.63-.04-1.06-.11s-.85-.16-1.27-.26c-.42-.11-.79-.26-1.11-.48-.32-.21-.51-.49-.58-.85-.35-1.76-.53-3.39-.53-4.87v-.95h.11c0-1.27-.02-2.57-.05-3.91-.04-1.34.05-2.61.27-3.81 0-.78.39-1.16 1.16-1.16.78-.07 1.43-.14 1.96-.21.53-.07 1.15-.18 1.85-.32l.32-.11c.56 0 1.09.04 1.59.11.49.07 1.02.11 1.59.11 2.19 0 4.34-.11 6.45-.32.85.35 1.8.55 2.86.58 1.06.04 2.04.05 2.96.05 1.13 0 2.24-.09 3.33-.26 1.09-.18 2.17-.26 3.23-.26.28 0 .55.02.79.05a5 5 0 00.79.05c.56 0 1.09-.05 1.59-.16s1.02-.16 1.59-.16h6.35c1.34 0 2.68.07 4.02.21 1.34.14 2.72.18 4.13.11h1.59c.92 0 1.62.18 2.12.53.49.35.85.81 1.06 1.38.21.56.32 1.2.32 1.9v2.13zm-1.37-17.98c-2.04 0-4.06-.18-6.03-.53l-5.92-1.06c-.63-.14-1.43-.42-2.38-.85s-1.94-.9-2.96-1.43c-1.02-.53-2.03-1.06-3.01-1.59-.99-.53-1.83-.93-2.54-1.22-.21-.07-.62-.35-1.22-.85-.6-.49-1.25-1.04-1.96-1.64-.7-.6-1.36-1.2-1.96-1.8-.6-.6-1.04-1.01-1.32-1.22-.63-.56-1.27-1.16-1.9-1.8a9.41 9.41 0 01-1.59-2.12l-2.33-4.12c-.35-.78-.65-1.53-.9-2.27s-.55-1.46-.9-2.17c-.42-.85-.69-1.71-.79-2.59-.11-.88-.23-1.82-.37-2.8-.14-.85-.32-1.74-.53-2.7-.21-.95-.32-1.85-.32-2.7 0-1.41.05-3.03.16-4.87.11-1.83.3-3.46.58-4.87.14-.71.33-1.36.58-1.96.25-.6.37-1.25.37-1.96.07-.56.16-1.08.26-1.53.11-.46.34-.93.69-1.43.35-.42.63-.88.85-1.37.21-.49.42-1.02.63-1.59.35-.85.72-1.71 1.11-2.59.39-.88.83-1.71 1.32-2.49.21-.35.55-.85 1-1.48.46-.63.97-1.3 1.53-2.01.56-.71 1.09-1.34 1.59-1.9.49-.56.92-.95 1.27-1.16l4.23-2.75c.56-.35 1.16-.58 1.8-.69.63-.11 1.27-.41 1.9-.9.35-.21.7-.37 1.06-.48.35-.11.7-.23 1.06-.37 1.76-.63 3.47-1.15 5.13-1.53 1.66-.39 3.4-.76 5.24-1.11.35-.07.74-.14 1.16-.21.42-.07.81-.11 1.16-.11.35 0 .74.02 1.16.05.42.04.81.05 1.16.05.78 0 1.53-.04 2.27-.11s1.5-.11 2.27-.11c.92 0 1.8.16 2.64.48.85.32 1.66.48 2.43.48.14 0 .3-.02.48-.05.18-.04.34-.05.48-.05.42 0 .99.11 1.69.32.71.21 1.43.44 2.17.69s1.45.51 2.12.79c.67.28 1.18.53 1.53.74.56.35.99.7 1.27 1.06.28.35.42.88.42 1.59 0 .71-.02 1.41-.05 2.12-.04.71-.05 1.45-.05 2.22v5.08c.07.71.14 1.39.21 2.06.07.67.11 1.32.11 1.96 0 .56-.09.97-.26 1.22-.18.25-.48.51-.9.79-.35.14-.62.37-.79.69-.18.32-.48.48-.9.48-.21 0-.51-.11-.9-.32-.39-.21-.79-.48-1.22-.79a53.252 53.252 0 00-2.12-1.53c-.78-.56-1.41-.93-1.9-1.11-.49-.18-.92-.3-1.27-.37s-.72-.12-1.11-.16c-.39-.04-.86-.19-1.43-.48-1.48-.71-3.24-1.06-5.29-1.06-.99 0-2.29.12-3.91.37s-2.93.58-3.91 1.01c-.78.28-1.57.49-2.38.63-.81.14-1.5.49-2.06 1.06-1.27 1.2-2.45 2.36-3.54 3.49-1.09 1.13-2.03 2.47-2.8 4.02-.28.56-.42 1.13-.42 1.69s-.14 1.09-.42 1.59c-.56.92-.9 1.85-1.01 2.8-.11.95-.16 1.92-.16 2.91 0 .56-.02 1.2-.05 1.9s.02 1.34.16 1.9l.74 2.86c.28 1.83.72 3.31 1.32 4.44.6 1.13 1.39 2.43 2.38 3.91.78 1.06 1.73 1.87 2.86 2.43l3.39 1.69c2.89 1.34 5.78 2.01 8.67 2.01.92 0 1.73-.16 2.43-.48s1.23-.48 1.59-.48c1.2 0 2.54-.37 4.02-1.11 1.48-.74 2.71-1.5 3.7-2.27.92-.85 2.05-1.27 3.39-1.27.21 0 .42.02.63.05.21.04.42.05.63.05.56.14.99.56 1.27 1.27s.48 1.52.58 2.43c.11.92.18 1.83.21 2.75.04.92.05 1.59.05 2.01.07.49.14.95.21 1.38.07.42.11.85.11 1.27 0 1.2-.18 2.49-.53 3.86-.35 1.38-1.13 2.42-2.33 3.12-.28.14-.53.32-.74.53-.21.21-.46.42-.74.63-.85.78-1.8 1.39-2.86 1.85-1.06.46-2.19.81-3.38 1.06s-2.42.42-3.65.53c-1.22.15-2.36.2-3.42.2zm80.96 46.38c-.04 1.38-.16 2.73-.37 4.07v.42c0 .35.02.72.05 1.11s.05.76.05 1.11c0 1.2-.09 2.42-.26 3.65-.18 1.23-.44 2.45-.79 3.65l-1.06 3.17c-.21.92-.62 1.9-1.22 2.96s-1.27 2.12-2.01 3.17a50.5 50.5 0 01-2.33 3.07c-.81.99-1.53 1.83-2.17 2.54-.42.56-.92 1.15-1.48 1.74-.56.6-1.13 1.11-1.69 1.53-.56.35-1.16.72-1.8 1.11-.63.39-1.16.79-1.59 1.22-.49.56-1.15 1.08-1.96 1.53-.81.46-1.67.88-2.59 1.27-.92.39-1.82.71-2.7.95-.88.25-1.67.41-2.38.48-.56.07-1.07.18-1.53.32s-.93.25-1.43.32c-.71.07-1.41.12-2.12.16-.7.04-1.41.05-2.11.05a8.9 8.9 0 01-2.33-.32c-.78-.21-1.37-.32-1.8-.32-1.06 0-2.12-.07-3.17-.21l-3.17-.42c-1.34-.14-2.61-.4-3.81-.79-1.2-.39-2.43-.72-3.7-1.01-.99-.21-2.03-.63-3.12-1.27-1.09-.63-2.1-1.23-3.01-1.8-.92-.49-1.82-.99-2.7-1.48-.88-.49-1.78-1.02-2.7-1.59-.56-.35-1.06-.85-1.48-1.48-.85-1.13-1.8-2.12-2.86-2.96-1.06-.85-1.87-1.97-2.43-3.39-.21-.78-.51-1.5-.9-2.17-.39-.67-.72-1.36-1.01-2.06-.35-.85-.67-1.67-.95-2.49-.28-.81-.53-1.64-.74-2.49-.42-1.76-.65-3.67-.69-5.71-.04-2.04-.05-3.95-.05-5.71 0-1.69.07-3.42.21-5.18s.46-3.46.95-5.08c.14-.63.37-1.25.69-1.85.32-.6.62-1.18.9-1.74.63-1.41 1.3-2.79 2.01-4.12.7-1.34 1.48-2.68 2.33-4.02.21-.35.62-.85 1.22-1.48s1.27-1.27 2.01-1.9c.74-.63 1.46-1.23 2.17-1.8.71-.56 1.27-.99 1.69-1.27 1.62-1.13 3.14-2.19 4.55-3.17 1.41-.99 2.86-1.83 4.34-2.54s3.07-1.25 4.76-1.64c1.69-.39 3.63-.58 5.82-.58.99 0 1.99-.05 3.01-.16 1.02-.11 2.03-.16 3.01-.16 1.76 0 3.54.18 5.34.53 1.8.35 3.51.78 5.13 1.27 2.82.85 5.2 1.82 7.14 2.91 1.94 1.09 3.67 2.38 5.18 3.86 1.52 1.48 2.91 3.16 4.18 5.02s2.61 3.97 4.02 6.29c.35.56.67 1.34.95 2.33.28.99.53 1.87.74 2.64.07.28.21.7.42 1.27.21.56.42 1.15.63 1.74.21.6.39 1.16.53 1.69s.21.9.21 1.11c.03 1.37.01 2.72-.03 4.1zm-13.59-88c.35 1.02.7 2.06 1.06 3.12.99 3.03 2.06 5.99 3.23 8.88 1.16 2.89 2.27 5.85 3.33 8.88.42.49.74.99.95 1.48.28.63.79 1.82 1.53 3.54.74 1.73 1.48 3.54 2.22 5.45.74 1.9 1.41 3.67 2.01 5.29s.9 2.61.9 2.96c0 .63-.25 1.06-.74 1.27-.49.21-1.02.32-1.59.32-.56 0-1.16-.04-1.8-.11-.63-.07-1.27-.11-1.9-.11-1.55 0-3.08.04-4.6.11-1.52.07-3.05.11-4.6.11-.63 0-1.16-.11-1.59-.32-.56-.21-1.02-.65-1.38-1.32-.35-.67-.63-1.25-.85-1.74-.85-2.12-1.73-4.21-2.64-6.29-.92-2.08-1.83-4.18-2.75-6.29-.42-1.06-.83-2.13-1.22-3.23-.39-1.09-.79-2.2-1.22-3.33l-1.69-4.02c-.99 1.48-2.04 2.96-3.17 4.44a26.81 26.81 0 00-2.86 4.65c.14 1.41.25 2.79.32 4.12.07 1.34.11 2.68.11 4.02 0 .35-.02.69-.05 1.01-.04.32-.09.65-.16 1-.14.63-.18 1.3-.11 2.01.07.71.11 1.41.11 2.12v1.38c0 .49-.16.86-.48 1.11-.32.25-.69.41-1.11.48-.42.07-.88.11-1.37.11h-1.27c-.35 0-.67.02-.95.05-.28.04-.6.05-.95.05-.49 0-.99-.02-1.48-.05-.49-.04-.99-.05-1.48-.05-.99 0-1.92.02-2.8.05-.88.04-1.78.05-2.7.05-1.27 0-2.08-.28-2.43-.85-.35-.56-.53-1.41-.53-2.54 0-.49-.02-.95-.05-1.38s-.05-.88-.05-1.37a313.582 313.582 0 01-.43-16.18c0-4.37.04-8.73.11-13.06.07-4.34.04-8.73-.11-13.17-.07-2.68-.12-5.38-.16-8.09-.04-2.71-.05-5.41-.05-8.09a29.424 29.424 0 01-.21-3.7c0-.35.04-.7.11-1.06s.11-.71.11-1.06c.07-1.62.37-2.56.9-2.8.53-.25 1.46-.37 2.8-.37.71 0 1.39-.02 2.06-.05.67-.04 1.36-.05 2.06-.05.85 0 1.78-.04 2.8-.11 1.02-.07 1.92-.04 2.7.11.14 0 .28-.02.42-.05.14-.04.28-.05.42-.05 1.69 0 2.71.34 3.07 1 .35.67.53 1.78.53 3.33 0 2.47-.04 4.94-.11 7.4-.07 2.47-.11 4.94-.11 7.4 0 1.2.05 2.38.16 3.54.1 1.16.16 2.34.16 3.54 2.68-3.6 5.16-7.33 7.46-11.21 2.29-3.88 4.64-7.72 7.03-11.53.35-.56.7-1.16 1.06-1.8.35-.63.88-1.13 1.59-1.48.49-.28 1.09-.42 1.8-.42.35 0 .69.02 1 .05.32.04.65.09 1 .16 1.2.14 2.43.21 3.7.21h5.39c.71 0 1.43.05 2.17.16s1.38.28 1.9.53c.53.25.79.65.79 1.22 0 .63-.28 1.52-.85 2.64-.56 1.13-1.02 1.97-1.37 2.54-1.41 2.19-2.82 4.34-4.23 6.45s-2.82 4.3-4.23 6.56c-.99 1.55-1.92 3.1-2.8 4.65-.88 1.55-1.85 3.1-2.91 4.65.37 1.07.72 2.11 1.07 3.13zm81.07 84.72c-.11.67-.25 1.36-.42 2.06-.18.71-.35 1.39-.53 2.06-.18.67-.37 1.22-.58 1.64-.28.56-.49 1.15-.63 1.75-.14.6-.28 1.18-.42 1.74-.28 1.06-.72 1.8-1.32 2.22-.6.42-1.15 1.09-1.64 2.01-.99 1.55-2.15 2.79-3.49 3.7-1.13.78-2.42 1.68-3.86 2.7-1.45 1.02-2.8 1.71-4.07 2.06-.78.21-1.57.48-2.38.79-.81.32-1.6.62-2.38.9-2.96.99-6.06 1.48-9.31 1.48-.56 0-1.09-.02-1.59-.05-.49-.04-1.02-.05-1.59-.05s-.92.05-1.06.16-.25.44-.32 1c-.21.99-.32 2.04-.32 3.17 0 .63.04 1.29.11 1.96.07.67.11 1.36.11 2.06v3.49c0 1.13-.07 2.29-.21 3.49-.14.85-.37 1.43-.69 1.74-.32.32-.93.51-1.85.58-.63 0-1.29.04-1.96.11-.67.07-1.36.11-2.06.11-1.2 0-2.36-.04-3.49-.11-1.13-.07-2.29-.18-3.49-.32-1.69-.14-2.73-.83-3.12-2.06-.39-1.23-.58-2.56-.58-3.97 0-.56.04-1.08.11-1.53.07-.46.11-.93.11-1.43 0-1.41-.11-2.84-.32-4.28a29.78 29.78 0 01-.32-4.28c0-.63.04-1.27.11-1.9.07-.63.11-1.23.11-1.8 0-1.2-.02-2.34-.05-3.44s-.05-2.2-.05-3.33v-4.12c0-1.34-.04-2.71-.11-4.12-.07-.78-.05-1.59.05-2.43.11-.85.16-1.69.16-2.54 0-2.04.02-4.09.05-6.13.04-2.04.05-4.09.05-6.13 0-.56-.04-1.16-.11-1.8-.07-.63-.11-1.23-.11-1.8 0-.78.11-1.57.32-2.38.21-.81.32-1.6.32-2.38 0-.56-.11-1.16-.32-1.8-.14-.7-.23-1.46-.26-2.27-.04-.81-.05-1.57-.05-2.27 0-1.69.34-2.87 1.01-3.54.67-.67 1.85-1.01 3.54-1.01.42 0 .86.02 1.32.05.46.04.9.05 1.32.05.63 0 1.34-.12 2.11-.37.78-.25 1.55-.4 2.33-.48.92-.07 1.83-.12 2.75-.16.92-.04 1.83-.05 2.75-.05 1.62 0 3.26.09 4.92.26 1.66.18 3.3.3 4.92.37 3.81.14 7.49 1.06 11.05 2.75 3.56 1.69 6.65 3.88 9.25 6.56.42.35.81.88 1.16 1.59.78 1.2 1.55 2.47 2.33 3.81.78 1.34 1.3 2.75 1.59 4.23.14.78.26 1.52.37 2.22.11.71.23 1.45.37 2.22.14.92.26 1.83.37 2.75.11.92.16 1.87.16 2.86-.01.41-.06.96-.17 1.63z" />
        <path d="M430.48 269.62c-.35-.21-.71-.63-1.06-1.27-.35-.63-.99-1.02-1.9-1.16 0 .07-.02.14-.05.21-.04.07-.05.14-.05.21 0 .21.14.51.42.9.28.39.49.65.63.79.49.35.88.74 1.16 1.16.28.42.6.88.95 1.38l.63.74c.35-.14.53-.39.53-.74s-.12-.76-.37-1.22c-.24-.46-.54-.79-.89-1zm-19.25 31.52c0 .35.11.56.32.63l.63.21.21-1.48a.724.724 0 00-.53-.21c-.42 0-.63.28-.63.85zM398 304.63l-.42.32c-.21 1.13-.39 2.22-.53 3.28-.14 1.06-.21 2.15-.21 3.28 0 .42.02.97.05 1.64.04.67.27 1.11.69 1.32l.42-1.48c.14-.49.21-1.02.21-1.59v-1.06c0-.99-.04-1.94-.11-2.86-.06-.91-.1-1.87-.1-2.85zM413.66 262c.56 0 .85-.18.85-.53 0-.35-.11-.53-.32-.53s-.42-.04-.63-.11c-.99-.14-2.04-.18-3.17-.11-1.13.07-2.22.11-3.28.11l-.53.21c1.13.21 2.31.42 3.54.63 1.23.23 2.41.33 3.54.33zm-20.84-.63c-.35 0-.63.18-.85.53-.21.35-.32.71-.32 1.06 0 .56.18.85.53.85.56 0 .92-.16 1.06-.48.14-.32.21-.69.21-1.11.01-.57-.2-.85-.63-.85zm-30.67 21.89c0-.35-.21-.53-.63-.53a.94.94 0 00-.42.11l1.37 6.56c.28-.28.42-.56.42-.85 0-.78-.09-1.66-.26-2.64-.18-.99-.34-1.87-.48-2.65zm28.45 39.45l-.84 1.38h1.48l-.32-1.27zM263.79 213.56l-.42-.85c0-.49-.04-.97-.11-1.43-.07-.46-.11-.9-.11-1.32 0-.35.04-.65.11-.9s.11-.51.11-.79c0-.71-.14-1.23-.42-1.59l-.32-.11c-.21 0-.32.18-.32.53v4.76c0 .78.25 1.66.74 2.64.49.99.99 1.76 1.48 2.33l.21-.11c-.14-.56-.25-1.11-.32-1.64-.07-.51-.28-1.03-.63-1.52zm-1.17-27.29v-.21l-.32-.11-.21.11-.48.48c-.18.18-.3.37-.37.58-.14.35-.37.85-.69 1.48-.32.63-.62 1.32-.9 2.06s-.53 1.45-.74 2.12c-.21.67-.32 1.15-.32 1.43v.11c.28 0 .42-.07.42-.21.49-.85.97-1.87 1.43-3.07.46-1.2.97-2.29 1.53-3.28l.37-.74c.2-.36.28-.61.28-.75zm29.88 48.97h-.9c-.78 0-1.59.04-2.43.11-.85.07-1.55-.25-2.12-.95l-1.69.63c.49.78 1.3 1.16 2.43 1.16.42 0 .86-.04 1.32-.1.46-.07.9-.11 1.32-.11.35 0 .69.04 1.01.11.32.07.65.1 1 .1s.53-.14.53-.42c.01-.35-.15-.53-.47-.53zm-20.04-6.45c-.07 0-.18.05-.32.16s-.21.19-.21.26c0 .14.07.28.21.42.21.21.53.39.95.53.14 0 .39-.05.74-.16s.56-.23.63-.37l-.11-.21c-.62-.28-1.25-.49-1.89-.63zm76.89 33.95c0-.14.02-.25.05-.32.04-.07.05-.18.05-.32 0-.35-.09-.56-.26-.63-.18-.07-.37-.14-.58-.21-.35-.14-.85-.33-1.48-.58s-1.13-.37-1.48-.37c-.42 0-.78.11-1.06.32.63.7 1.37 1.16 2.22 1.37s1.7.46 2.54.74zm-42.73 17.88l-.21.11c-.85 1.9-1.43 3.56-1.74 4.97-.32 1.41-.48 3.14-.48 5.18 0 .63.28 1.23.85 1.8.14-.56.21-.99.21-1.27 0-1.13.02-2.17.05-3.12.04-.95.23-1.96.58-3.01 0-.14.07-.42.21-.85.14-.42.26-.88.37-1.37.11-.49.21-.93.32-1.32.11-.39.16-.65.16-.79 0-.23-.11-.33-.32-.33zm-5.5-53.84c.21 0 .53-.14.95-.42.42-.28.63-.56.63-.85 0-.21-.07-.32-.21-.32-.21.07-.53.25-.95.53l-.95.63c.07.07.14.16.21.26.08.12.18.17.32.17zm30.89 35.86c-.21-.49-.56-.74-1.06-.74-.35 0-.69.02-1.01.05-.32.04-.55.26-.69.69.71.28 1.23.42 1.59.42s.74-.14 1.17-.42zm26.02 45.48c-.49 0-.83.23-1.01.69-.18.46-.26.86-.26 1.22s.18.6.53.74c.21-.28.41-.58.58-.9.18-.32.26-.65.26-1.01 0-.14-.02-.26-.05-.37s-.05-.23-.05-.37zm-66-136.97l-.32-.11-1.06 1.59h1.7zm-14.55 10.2c.18.11.33.16.48.16s.34-.26.58-.79c.25-.53.37-.86.37-1l-.32-.32c-.21.07-.46.26-.74.58-.28.32-.49.58-.63.79l-.11.21c.08.14.2.27.37.37zm25.55 1.22c.14 0 .28-.07.42-.21.14-.14.21-.28.21-.42 0-.21-.07-.49-.21-.85a5.17 5.17 0 00-.42-.85h-.21c-.21.21-.32.39-.32.53v.63c0 .14.05.37.16.69.1.32.23.48.37.48zm50.55 101.27c-.21-.81-.48-1.59-.79-2.33-.32-.74-.69-1.32-1.11-1.75a17.83 17.83 0 01-2.38-3.54c-.67-1.3-1.71-2.24-3.12-2.8-1.13-.42-2.24-.86-3.33-1.32-1.09-.46-2.24-.9-3.44-1.32-1.34-.49-2.5-.74-3.49-.74-1.2 0-2.4.23-3.6.69-1.2.46-2.4.83-3.6 1.11s-2.38.76-3.54 1.43c-1.16.67-2.27 1.29-3.33 1.85-.71.35-1.23.88-1.59 1.59-.35.49-.72.92-1.11 1.27-.39.35-.76.81-1.11 1.37-.85 1.48-1.64 3.17-2.38 5.08-.74 1.9-1.11 3.74-1.11 5.5 0 1.41.05 2.79.16 4.12.11 1.34.48 2.64 1.11 3.91.56 1.06 1.2 2.03 1.9 2.91.71.88 1.45 1.78 2.22 2.7 1.2 1.48 2.57 2.61 4.12 3.38 1.55.78 3.21 1.48 4.97 2.12.35.14.69.26 1 .37.32.11.65.16 1.01.16.28 0 .51-.04.69-.11.18-.07.37-.11.58-.11.49 0 1.04.11 1.64.32.6.21 1.25.32 1.96.32 1.13 0 2.4-.18 3.81-.53.56-.14 1.06-.34 1.48-.58.42-.25.92-.37 1.48-.37h.32c.35-.14 1-.51 1.96-1.11.95-.6 1.94-1.25 2.96-1.96s1.92-1.39 2.7-2.06c.78-.67 1.16-1.18 1.16-1.53 0-.85.25-1.59.74-2.22.49-.63.81-1.37.95-2.22.35-1.48.58-2.98.69-4.5.11-1.52.16-3.01.16-4.5 0-.63-.07-1.36-.21-2.17-.14-.8-.31-1.62-.53-2.43zm-14.28 35.01a5.93 5.93 0 01-1.8-.16c-.56-.14-.99-.21-1.27-.21-.49 0-.99.07-1.48.21l-1.48.42c.28.21.58.42.9.63.32.21.65.32 1.01.32s.81-.02 1.37-.05 1.15-.09 1.74-.16c.6-.07 1.16-.16 1.69-.26.53-.11.93-.23 1.22-.37l-.11-.32c-.55-.06-1.15-.08-1.79-.05zm-25.64-4.7c-.46-.42-.93-.81-1.43-1.16-.49-.35-.88-.63-1.16-.85 0 .92.39 1.9 1.16 2.96.78 1.06 1.69 1.59 2.75 1.59h.32c0-.42-.16-.85-.48-1.27-.32-.43-.71-.85-1.16-1.27zm43.36-42.42c.04-.21.05-.42.05-.63 0-.42-.18-.88-.53-1.37-.42.21-.63.53-.63.95 0 .35.05.72.16 1.11.1.39.37.62.79.69.07-.29.13-.53.16-.75zm-44.9 28.88c.07-.28.16-.55.26-.79.11-.25.16-.51.16-.79 0-.35-.14-.74-.42-1.16-.42.14-.65.39-.69.74s-.05.71-.05 1.06c0 .55.25.87.74.94zm.43-32.05c.21.07.39.11.53.11h.32c.42 0 .76-.19 1.01-.58.25-.39.37-.76.37-1.11 0-.21-.07-.48-.21-.79-.14-.32-.35-.48-.63-.48s-.63.33-1.06 1c-.42.67-.63 1.15-.63 1.43-.02.21.08.35.3.42z" />
      </g>
    </svg>
  );
}

BackToTopIcon.propTypes = {
  accentClass: PropTypes.string,
};

export { BackToTopIcon };
