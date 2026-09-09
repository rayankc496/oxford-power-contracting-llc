import React from 'react';

interface WhatsAppAppLogoProps {
  className?: string;
  rectFill?: string;
  pathFill?: string;
  rx?: number | string;
  ry?: number | string;
  showRect?: boolean;
}

/**
 * Full Official WhatsApp App Icon
 * Green rounded squircle badge with speech bubble & phone receiver inside.
 * Transparent background outside the rounded corners.
 * Allows custom rectFill, pathFill, rx & ry to match custom theme color combos and corner sharp/rounded styles.
 */
export const WhatsAppAppLogo: React.FC<WhatsAppAppLogoProps> = ({
  className = 'w-6 h-6',
  rectFill,
  pathFill = '#ffffff',
  rx = 22,
  ry = 22,
  showRect = true,
}) => {
  const gradientId = React.useId ? React.useId() : 'waGradient';

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {showRect && !rectFill && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#128C7E" />
          </linearGradient>
        </defs>
      )}
      {/* Background Rect */}
      {showRect && (
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx={rx}
          ry={ry}
          fill={rectFill || `url(#${gradientId})`}
        />
      )}

      {/* Speech Bubble Outline + Phone Handset Receiver */}
      <g transform={showRect ? 'translate(16, 16) scale(0.68)' : 'translate(0, 0) scale(1)'}>
        <path
          fill={pathFill}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M85.5 14.5C76.1 5.1 63.5 0 50.2 0 22.7 0 .4 22.4.4 49.9c0 8.8 2.3 17.4 6.7 24.9L0 100l25.8-6.8c7.3 4 15.5 6.1 24.4 6.1h.1c27.5 0 49.9-22.4 49.9-49.9 0-13.3-5.2-25.9-14.7-34.9zM50.3 91.1h-.1c-7.4 0-14.7-2-21-5.7l-1.5-.9-15.6 4.1 4.2-15.2-1-1.6C11.4 65.3 9.3 57.7 9.3 49.9c0-22.6 18.4-41 41-41 11 0 21.3 4.3 29.1 12 7.8 7.8 12.1 18.1 12.1 29.1 0 22.6-18.4 41.1-41.2 41.1zm22.6-30.9c-1.2-.6-7.4-3.6-8.5-4-1.2-.4-2-.6-2.8.6-.9 1.2-3.3 4-4 4.8-.8.8-1.5 1-2.7.4-1.2-.6-5.2-1.9-10-6.1-3.7-3.3-6.2-7.4-6.9-8.6-.7-1.2-.1-1.9.5-2.5.6-.6 1.2-1.5 1.9-2.2.6-.8.8-1.2 1.2-2.1.4-.8.2-1.6-.1-2.2-.3-.6-2.8-6.8-3.9-9.4-1-2.5-2-2.1-2.8-2.2-.7 0-1.6 0-2.4 0-.8 0-2.2.3-3.3 1.6-1.2 1.2-4.4 4.3-4.4 10.5 0 6.2 4.5 12.1 5.1 13 .6.8 8.9 13.5 21.5 19 3 1.3 5.3 2.1 7.2 2.7 3 1 5.8.8 7.9.5 2.4-.4 7.4-3 8.4-5.9 1-2.9 1-5.4.7-5.9-.3-.5-1.1-.9-2.3-1.5z"
        />
      </g>
    </svg>
  );
};

interface WhatsAppOutlineIconProps {
  className?: string;
}

/**
 * Clean Single-Color Vector WhatsApp Icon (inherits text color, suitable for minimalist social bars)
 */
export const WhatsAppOutlineIcon: React.FC<WhatsAppOutlineIconProps> = ({
  className = 'w-5 h-5',
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.52 3.48A11.93 11.93 0 0012.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.9 11.9 0 005.86 1.52h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.44zM12.07 21.87h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.87 9.87 0 01-1.52-5.26c0-5.46 4.45-9.91 9.91-9.91 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 012.9 7c0 5.46-4.45 9.91-9.9 9.91zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52-.18-.01-.38-.01-.58-.01-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35z"
      />
    </svg>
  );
};

export const WhatsAppIcon = WhatsAppAppLogo;
