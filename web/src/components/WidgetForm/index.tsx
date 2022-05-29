import { useState } from "react";
import bugImageUrl from '../../assets/Bug.svg';
import ideaImageUrl from '../../assets/Idea.svg';
import thoughtImageUrl from '../../assets/Thought.svg';
import { FeedbackContentStep } from "./Step/FeedbackContentStep";
import { FeedbackSucessStep } from "./Step/FeedbackSucessStep";
import { FeedbackTypeStep } from "./Step/FeedbackTypeStep";



export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de um lâmpada'
    }
  },
  THOUGHT: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      { feedbackSent ? (
        <FeedbackSucessStep
          onFeedbackRestartRequest={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequest={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ❤️ por Arthur Pickert
      </footer>
    </div>
  );
}