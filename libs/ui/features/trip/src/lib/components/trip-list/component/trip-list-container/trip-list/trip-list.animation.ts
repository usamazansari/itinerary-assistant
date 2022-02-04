import type { AnimationTransitionMetadata } from '@angular/animations';
import { transition, style, animate } from '@angular/animations';

// TODO: Usama Ansari - 🚚 Move to ui/elements depending on usage

export function fadeIn(): AnimationTransitionMetadata[] {
  return [
    transition(
      ':enter',
      [
        style(
          {
            opacity: 0
          }
        ),
        animate(
          '500ms ease-in',
          style(
            {
              opacity: 1
            }
          )
        )
      ]
    )
  ];
}
