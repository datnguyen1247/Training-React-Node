import { ActionList, Icon, Modal, Popover } from "@shopify/polaris";
import { MenuHorizontalIcon } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

type DotAction = {
  onDeleteTranslation: (locale: string) => void;
  locale: string;
};
export default function DotAction({ onDeleteTranslation, locale }: DotAction) {
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const [activeModal, setActiveModal] = useState(false);
  const navigation = useNavigate();
  const toggleModal = useCallback(
    () => setActiveModal((active) => !active),
    []
  );
  const handleClickDelete = () => {
    onDeleteTranslation(locale);
  };
  const activator = (
    <div style={{ padding: "4px" }} onClick={toggleActive}>
      <Icon source={MenuHorizontalIcon} tone="base" />
    </div>
  );

  const navigateToEditPage = () => {
    navigation(`/translation/edit/${locale}`);
  };
  return (
    <div>
      <Popover
        active={active}
        activator={activator}
        autofocusTarget="first-node"
        onClose={toggleActive}
      >
        <ActionList
          actionRole="menuitem"
          items={[
            { content: "Edit", onAction: navigateToEditPage },
            {
              content: "Delete",
              destructive: true,
              onAction: toggleModal,
            },
          ]}
        />
      </Popover>
      {activeModal && (
        <Modal
          activator={activator}
          open={activeModal}
          onClose={toggleModal}
          title="Remove 1 translation?"
          primaryAction={{
            destructive: true,
            content: "Delete",
            onAction: handleClickDelete,
          }}
          secondaryActions={[
            {
              content: "Cancel",
              onAction: toggleModal,
            },
          ]}
        >
          <Modal.Section>This can’t be undone.</Modal.Section>
        </Modal>
      )}
    </div>
  );
}
